let express = require('express');
var jsonfile = require('jsonfile');
var path = require('path');
var q = require('q');
var projectDataPath = path.join(__dirname, '../data/project.json');
var moduleDataPath = path.join(__dirname, '../data/module.json');
var language_localDataPath = path.join(__dirname, '../data/language_locale.json');
var langsDataPath = path.join(__dirname, '../data/langs.json');
var router = express.Router();

function Status(name, msg, opt) {
  this.status = name || 'success';
  this.msg = msg || '';
}

function getFile(path) {
  var deferred = q.defer();
  jsonfile.readFile(path, function (err, data) {
    if (err) {
      deferred.reject(new Error(err));
    } else {
      deferred.resolve(data);
    }
  });
  return deferred.promise;
}
function writeFile(path, data) {
  var deferred = q.defer();
  jsonfile.writeFile(path, data, {}, function (err) {
    if (err) {
      deferred.reject(new Error(err));
    } else {
      deferred.resolve();
    }
  });
  return deferred.promise;
}

/* GET projects. */
router.get('/project', function (req, res, next) {
  jsonfile.readFile(projectDataPath, function (err, projects) {
    res.json(projects);
  });
});

/**
 * 返回指定project 的module
 */
router.get('/module/:project', function (req, res, next) {
  var project = req.params['project'];
  jsonfile.readFile(moduleDataPath, function (err, modules) {
    res.json(modules.filter(function (m) {
      return m.project === project;
    }));
  });
});

/**
 * 添加module
 */
router.post('/module', function (req, res, next) {
  var module = req.body['module'];
  jsonfile.readFile(moduleDataPath, function (err, modules) {
    modules.push(module);
    jsonfile.writeFile(moduleDataPath, modules, {}, function () {
      res.json(new Status());
    });
  });
});

/**
 * 返回语言信息
 */
router.get('/language_locale', function (req, res, next) {
  jsonfile.readFile(language_localDataPath, function (err, language) {
    res.json(language);
  });
});

/**
 * 根据条件搜索国际化语言详细信息
 */
router.get('/langs', function (req, res) {
  var query = req.query;
  jsonfile.readFile(langsDataPath, function (err, langs) {
    res.json(langs.filter(function (l) {
      var project = query.project || l.project;
      var module = query.module || l.module;
      var language = query.language || l.language;
      var locale = query.locale || l.locale;
      var key = query.key || l.key;
      var value = query.value || l.value;
      return project === l.project
        && module === l.module
        && language === l.language
        && locale === l.locale
        && key === l.key
        && l.value.indexOf(value) > -1;
    }));
  });
});

/**
 * 修改多国语
 */
router.put('/lang', function (req, res) {
  var project = req.body['project'];
  var module = req.body['module'];
  var key = req.body['key'];
  var i18n = req.body['i18n'];
  jsonfile.readFile(langsDataPath, function (err, langs) {
    var currentLang = langs.filter(function (l) {
      return l.project === project && l.module === module && l.key === key;
    });
    currentLang.forEach(function (l) {
      var tempI18n = i18n.find(function (i) {
        return l.language === i.language && l.locale === i.locale;
      })
      if (tempI18n) {
        l.value = tempI18n.value;
      }
    });

    i18n.forEach(i=> {
      var tempI18n = currentLang.find(function (l) {
        return l.language === i.language && l.locale === i.locale;
      });
      if (tempI18n) {
        tempI18n.value = i.value;
      } else {
        langs.push({
          project: project,
          module: module,
          key: key,
          language: i.language,
          locale: i.locale,
          value: i.value
        });
      }
    });
    jsonfile.writeFile(langsDataPath, langs, {}, function (err) {
      res.json(new Status());
    });
  });

});

/**
 * 新增多国语
 */
router.post('/lang', function (req, res) {
  var project = req.body['project'];
  var module = req.body['module'];
  var key = req.body['key'];
  var i18n = req.body['i18n'];
  jsonfile.readFile(langsDataPath, function (err, langs) {
    var existLang = langs.filter(function (l) {
      return l.project === project && l.module === module && l.key === key;
    });
    if (existLang && existLang.length) {
      res.json(new Status('error', 'exist i18n key!!!'))
    } else {
      i18n.forEach(i=> {
        langs.push({
          project: project,
          module: module,
          key: key,
          language: i.language,
          locale: i.locale,
          value: i.value
        });
      });
      jsonfile.writeFile(langsDataPath, langs, {}, function (err) {
        res.json(new Status());
      });
    }
  });
});

/**
 * 删除指定项目/模块/key 的多国语
 */
router.delete('/lang', function (req, res) {
  var project = req.query['project'];
  var module = req.query['module'];
  var key = req.query['key'];
  jsonfile.readFile(langsDataPath, function (err, langs) {
    var remainLangs = [];
    langs.forEach(function (l) {
      if (l.project === project && l.module === module && l.key === key) {
        return;
      }
      remainLangs.push(l);
    });
    jsonfile.writeFile(langsDataPath, remainLangs, {}, function (err) {
      res.json(new Status());
    });
  });
});

router.post('/build', function (req, res) {
  q.all([getFile(projectDataPath), getFile(language_localDataPath), getFile(langsDataPath)]).then(function (result) {
    var projects = result[0];
    var language = result[1];
    var langs = result[2];
    var languageI18n = {};
    var globalProjectName = '';
    projects.forEach(function (p) {
      if (p.globalProject) {
        globalProjectName = p.name;
      }
      language.forEach(function (l) {
        l.locale.forEach(function (locale) {
          languageI18n[p.name + '_' + l.language + '_' + locale] = {};
        });
      });
    });

    langs.forEach(function (l) {
      if (l.project === globalProjectName) {//公共项目的需要添加到其它项目中
        projects.forEach(function (p) {
          languageI18n[p.name + '_' + l.language + '_' + l.locale][l.project + '$' + l.module + '$' + l.key] = l.value;
        });
      }
      else {
        languageI18n[l.project + '_' + l.language + '_' + l.locale][l.project + '$' + l.module + '$' + l.key] = l.value;
      }
    });
    var writeFiles = [];
    var buildI1n8Path = path.join(__dirname, '../build/');
    for (var languageLocale in languageI18n) {
      writeFiles.push(writeFile(buildI1n8Path + languageLocale + '.json', languageI18n[languageLocale]));
    }
    q.all(writeFiles).then(function () {
      res.json(new Status());
    });
  })
});
module.exports = router;

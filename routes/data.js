let express = require('express');
var jsonfile = require('jsonfile');
var path = require('path');
var projectDataPath = path.join(__dirname, '../data/project.json');
var moduleDataPath = path.join(__dirname, '../data/module.json');
var language_localDataPath = path.join(__dirname, '../data/language_locale.json');
var langsDataPath = path.join(__dirname, '../data/langs.json');
var router = express.Router();

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
      res.end();
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
      if(tempI18n){
        l.value = tempI18n.value;
      }
    });
    jsonfile.writeFile(langsDataPath,langs,{},function (err) {
      res.end();
    });
  });

});

module.exports = router;

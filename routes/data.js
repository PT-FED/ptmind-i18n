var express = require('express');
var jsonfile = require('jsonfile');
var path = require('path');
var projectDataPath = path.join(__dirname,'../data/project.json');
var moduleDataPath = path.join(__dirname,'../data/module.json');
var router = express.Router();

/* GET projects. */
router.get('/project', function(req, res, next) {
    jsonfile.readFile(projectDataPath, function(err, projects) {
        res.json(projects);
    });
});

/**
 * 返回指定project 的module
 */
router.get('/module/:project', function(req, res, next) {
    var project = req.params['project'];
    jsonfile.readFile(moduleDataPath, function(err, modules) {
        res.json(modules.filter(function (m) {
            return m.project ===project;
        }));
    });
});

router.post('/module',function (req, res, next) {
    var module = req.body['module'];
    jsonfile.readFile(moduleDataPath, function(err, modules) {
        modules.push(module);
        jsonfile.writeFile(moduleDataPath,modules,{},function () {
            res.end();
        });
    });
});


module.exports = router;

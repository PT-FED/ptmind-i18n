var express = require('express');
var jsonfile = require('jsonfile');
var path = require('path');
var projectDataPath = path.join(__dirname,'../data/project.json');
var router = express.Router();

/* GET users listing. */
router.get('/project', function(req, res, next) {
    jsonfile.readFile(projectDataPath, function(err, obj) {
        res.json(obj);
    });
});

module.exports = router;

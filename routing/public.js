var express = require('express');
var router = express.Router();

router.get('/about.html', function(req, res) {
  res.sendFile(__dirname + '/public/html/about.html');
});

router.get('/personal.html', function(req, res) {
  res.sendFile(__dirname + '/public/html/personal.html');
});

router.get('/question.html', function(req, res) {
  res.sendFile(__dirname + '/public/html/question.html');
});

router.get('/main.js', function(req, res) {
  res.sendFile(__dirname + '/public/javascript/main.js');
});

routing.get('/main.css', function(req, res) {
  res.sendFile(__dirname + '/public/css/main.css');
});

module.exports = router;

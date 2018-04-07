var express = require('express');
var router = express.Router();

router.get('/about.html', function(req, res) {
  res.sendFile(__dirname + '/public/html/about.html');
});

router.get('/personal.html', function(req, res) {
  res.sendFile(__dirname + '/public/html/personal.html');
});

router.get('/questions.html', function(req, res) {
  res.sendFile(__dirname + '/public/html/questions.html');
});

router.get('/login.html', function(req, res) {
  res.sendFile(__dirname + '/public/html/login.html');
});

router.get('/bootstrap.bundle.js', function(req, res) {
  res.sendFile(__dirname + '/public/javascript/bootstrap.bundle.js');
});

router.get('/bootstrap.bundle.js.map', function(req, res) {
  res.sendFile(__dirname + '/public/javascript/bootstrap.bundle.js.map');
});

router.get('/bootstrap.bundle.min.js', function(req, res) {
  res.sendFile(__dirname + '/public/javascript/bootstrap.bundle.min.js');
});

router.get('/bootstrap.bundle.min.js.map', function(req, res) {
  res.sendFile(__dirname + '/public/javascript/bootstrap.bundle.min.js.map');
});

router.get('/bootstrap.js', function(req, res) {
  res.sendFile(__dirname + '/public/javascript/bootstrap.js');
});

router.get('/bootstrap.js.map', function(req, res) {
  res.sendFile(__dirname + '/public/javascript/bootstrap.js.map');
});

router.get('/bootstrap.min.js', function(req, res) {
  res.sendFile(__dirname + '/public/javascript/bootstrap.min.js');
});

router.get('/bootstrap.min.js.map', function(req, res) {
  res.sendFile(__dirname + '/public/javascript/bootstrap.min.js.map');
});

router.get('/login.js', function(req, res) {
  res.sendFile(__dirname + '/public/javascript/login.js');
});

router.get('/main.css', function(req, res) {
  res.sendFile(__dirname + '/public/css/main.css');
});

router.get('/business-casual.css', function(req, res){
  res.sendFile(__dirname + '/public/css/business-casual.css');
})

router.get('/business-casual.min.css', function(req, res){
  res.sendFile(__dirname + '/public/css/business-casual.min.css');
})

router.get('/bootstrap.css', function(req, res){
  res.sendFile(__dirname + '/public/css/bootstrap.css');
})

router.get('/bootstrap.css.map', function(req, res){
  res.sendFile(__dirname + '/public/css/bootstrap.css.map');
})

router.get('/bootstrap.min.css', function(req, res){
  res.sendFile(__dirname + '/public/css/bootstrap.min.css');
})

router.get('/login.css', function(req, res){
  res.sendFile(__dirname + '/public/css/login.css');
})

router.get('/background.jpg', function(req, res){
  res.sendFile(__dirname + '/public/images/background.jpg');
})

router.get('/about.jpg', function(req, res){
  res.sendFile(__dirname + '/public/images/about.jpg');
})

router.get('/logo.png', function(req, res){
  res.sendFile(__dirname + '/public/images/logo.png')
})





module.exports = router;

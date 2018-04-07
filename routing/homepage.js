var express = require('express');
var router = express.Router();

router.get('/login', function(req, res) {
  console.log('/homepage/login');
  var data = {
    message : '/homepage/login is not implemented yet'
  }
  res.send(JSON.stringify(data));
});

router.get('/createAccount', function(req, res) {
  console.log('/homepage/createAccount');
  var data = {
    message : '/homepage/createAccount is not implemented yet'
  }
  res.send(JSON.stringify(data));
});

router.get('/createQuestion', function(req, res) {
  console.log('/homepage/createQuestion');
  var data = {
    message : '/homepage/createQuestion is not implemented yet'
  }
  res.send(JSON.stringify(data));
});

router.get('/getLatestQuestions', function(req, res) {
  console.log('/homepage/getLatestQuestions');
  var data = {
    message : '/homepage/getLatestQuestions is not implemented yet'
  }
  res.send(JSON.stringify(data));
});

module.exports = router;

var express = require('express');
var homepage = require('../processes/homepage')
var router = express.Router();

router.get('/login', function(req, res) {
  console.log('/homepage/login');

  var username = req.param('username');
  var password = req.param('password');

  homepage.login(username, password, function(userID, err) {
    if (err == null) {
      res.send(JSON.stringify({'success': true, 'userID':userID}));
    } else {
      res.send(JSON.stringify({'success':false, 'message':err}));
    }
  });
});

router.get('/createAccount', function(req, res) {
  console.log('/homepage/createAccount');

  var username = req.param('username');
  var password = req.param('password');

  homepage.createAccount(username, password, function(userID, err) {
    if (err == null) {
      res.send(JSON.stringify({'success': true, 'userID':userID}));
    } else {
      res.send(JSON.stringify({'success':false, 'message':err}));
    }
  });
});

router.get('/createQuestion', function(req, res) {
  console.log('/homepage/createQuestion');

  var anonymousName = req.param('anonymousName');
  var userID = req.param('userID');
  var question = req.param('question');

  homepage.createQuestion(anonymousName, userID, question, function(questionID, err) {
    if (err == null) {
      res.send(JSON.stringify({'success': true, 'questionID':questionID}));
    } else {
      res.send(JSON.stringify({'success':false, 'message':err}));
    }
  });

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

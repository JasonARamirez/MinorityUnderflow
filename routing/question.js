var express = require('express');
var question = require('../processes/question');
var router = express.Router();

router.get('/getQuestion', function(req, res) {
  console.log('/question/getQuestion');
  var data = {
    message : '/question/getQuestion is not implemented yet'
  }
  res.send(JSON.stringify(data));
});

router.get('/answerQuestion', function(req, res) {
  console.log('/question/answerQuestion');

  var userID = req.query['userID'];
  var anonymousName = req.query['anonymousName'];
  var questionID = req.query['questionID'];
  var responseStr = req.query['response'];

  question.answerQuestion(userID, anonymousName, questionID, responseStr, function(err) {
    if (err == null) {
      res.send(JSON.stringify({'success': true}));
    } else {
      res.send(JSON.stringify({'success':false, 'message':err}));
    }
  });
});

module.exports = router;

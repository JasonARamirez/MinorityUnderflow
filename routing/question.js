var express = require('express');
var router = express.Router();

router.get('/getQuestion', function(req, res) {
  console.log('/question/getQuestion');
  var data = {
    message : '/question/getQuestion is not implemented yet'
  }
  res.send(JSON.stringify(data));
});

router.get('/answerQuestion', function(req, res) {
  console.log('/question/getQuestion');
  var data = {
    message : '/question/getQuestion is not implemented yet'
  }
  res.send(JSON.stringify(data));
});

module.exports = router;

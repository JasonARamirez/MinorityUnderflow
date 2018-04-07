var express = require('express');
var router = express.Router();

router.get('/getMyQuestions', function(req, res) {
  console.log('/personal/getMyQuestions');
  var data = {
    message : '/personal/getMyQuestions is not implemented yet'
  }
  res.send(JSON.stringify(data));
});

router.get('/getMyResponses', function(req, res) {
  console.log('/personal/getMyResponses');
  var data = {
    message : '/personal/getMyResponses is not implemented yet'
  }
  res.send(JSON.stringify(data));
});

module.exports = router;

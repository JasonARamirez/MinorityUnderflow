var express = require('express');
var personal = require('../processes/personal');
var router = express.Router();

router.get('/getMyQuestions', function(req, res) {
  console.log('/personal/getMyQuestions');

  var userID = req.query['userID'];

  personal.getMyQuestions(userID, function(questionsArr, err) {
    if (err != null) {
      res.send(JSON.stringify({'success':false, 'message':err}))
    } else {
      res.send(JSON.stringify({'success':true, 'questionsArr':questionsArr}));
    }
  });
});

router.get('/getMyResponses', function(req, res) {
  console.log('/personal/getMyResponses');
  var data = {
    message : '/personal/getMyResponses is not implemented yet'
  }
  res.send(JSON.stringify(data));
});

module.exports = router;

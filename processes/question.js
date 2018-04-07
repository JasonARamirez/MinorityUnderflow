var dbCreate = require('../database/create');
var dbRead = require('../database/read');
var dbUpdate = require('../database/update');

exports.answerQuestion = function(userID, anonymousName, questionID, responseStr, cb) {
  dbRead.QuestionData(questionID, function(err, result) {
    if (err != null) {
      cb('Internal Server Error 1');
    } else {
      var time = new Date().getTime();
      dbCreate.Responses(userID, questionID, result.questionString, anonymousName, time, 0, function(err) {
        if (err != null) {
          cb('Internal Server 2');
        } else {
          dbUpdate.addResponseToQuestion()
        }
      });
    }
  });
}

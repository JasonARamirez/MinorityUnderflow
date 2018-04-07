var db = require('./db')
var read = require('./read')

exports.addResponseToQuestion = function(questionID, anonymousName, responseStr, time, cb) {
  read.QuestionData(questionID, function(err, result) {
    var responses = result.responses;
    responses.push({
      'anonymousName':anonymousName,
      'responseString':responseStr,
      'time:':time
    })
  });

}

exports.chooseAnonymousName = function(questionID, userID, anonymousName, cb) {

}

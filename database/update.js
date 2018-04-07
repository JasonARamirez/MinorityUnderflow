var db = require('./db')
var read = require('./read')

exports.addResponseToQuestion(questionID, anonymousName, responseStr, time, cb) {
  read.QuestionData(questionID, function(err, result) {
    var responses = result.responses;
    
  });

}

exports.chooseAnonymousName(questionID, userID, anonymousName, cb) {

}

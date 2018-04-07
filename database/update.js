var db = require('./db')
var read = require('./read')

exports.addResponseToQuestion(questionID, anonymousName, responseStr, time, cb) {
  read.QuestionData(questionID, function(err, result) {
    var responses = result.responses;
    responses.push({
      'anonymousName':anonymousName,
      'responseString':responseStr,
      'time:':time
    })

    var newvalue = { $set: {responses: responses} };
    var questionCollection = db.get().collection('question_data')
    questionCollection.updateOne({'questionID':questionID}, newvalue, cb);
  });

}

exports.chooseAnonymousName(questionID, userID, anonymousName, cb) {
  read.AnonymousNameData(userID, function(err, result) {
    var responses = results.responses;
  })

}

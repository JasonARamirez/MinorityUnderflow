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

    var newvalue = { $set: {responses: responses} };
    var questionCollection = db.get().collection('question_data')
    questionCollection.updateOne({'questionID':questionID}, newvalue, cb);
  });

}

exports.chooseAnonymousName = function(questionID, userID, anonymousName, cb) {
  read.AnonymousNameData(userID, function(err, result) {
    var questionIDs = result.questionIDs;
    questionIDs[questionID] = anonymousName;

    var newvalue = { $set: {questionIDs: questionIDs} };
    var anonymousNameCollection = db.get().collection('anonymous_name_data')
    anonymousNameCollection.updateOne({'userID':userID}, newvalue, cb);
  })

}

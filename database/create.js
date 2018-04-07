var db = require('./db')

exports.User = function(username, password, userID, cb) {
  var user = {
    'username':username,
    'password':password,
    'userID':userID
  }
  var userCollection = db.get().collection('user_data');
  userCollection.insertOne(user, function(err, result){
    cb(err);
  });
}

exports.Question = function(questionID, questionStr, askerID, askerAnonymousName, time, cb) {
  var question = {
    'questionID':questionID,
    'questionString':questionStr,
    'askerID':askerID,
    'askerAnonymousName':askerAnonymousName,
    'time':time,
    'responses' : []
  }
  var questionCollection = db.get().collection('question_data');
  questionCollection.insertOne(question, function(err, result){
    cb(err);
  });

}

exports.AnonymousName = function(userID, questionIDs, anonymousName, cb) {
  var anonymousName = {
    'userID':userID,
    'questionIDs':questionIDs,
    'anonymousName':anonymousName
  }
  anonymousNameCollection.insertOne(anonymousName, function(err, result){
    cb(err);
  });

}

exports.Responses = function(responderID, questionID, questionStr, anonymousName, time, numUpvotes, cb) {
  var response = {
    'responderID':responderID,
    'questionID':questionID,
    'questionString':questionStr,
    'anonymousName': anonymousName,
    'time':time,
    'numberOfUpvotes':numUpvotes
  }
  var responseCollection = db.get().collection('responder_data');
  responseCollection.insertOne(response, function(err, result){
    cb(err);
  });

}

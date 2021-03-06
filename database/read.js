var db = require('./db')

exports.UserUsername = function(username, cb) {
  var userCollection = db.get().collection('user_data')
  console.log('userusername');
  userCollection.findOne({"username":username}, cb);
}

exports.UserUsernamePassword = function(username, password, cb) {
  var userCollection = db.get().collection('user_data');
  userCollection.findOne({"username":username, "password":password}, cb);
}

exports.UserUserID = function(userID, cb) {
  var userCollection = db.get().collection('user_data');
  userCollection.findOne({"userID":userID}, cb);
}

exports.QuestionData = function(questionID, cb) {
  var questionCollection = db.get().collection('question_data')
  questionCollection.findOne({"questionID":questionID}, cb)
}

exports.AnonymousNameData = function(userID, cb) {
  var anonymousNameCollection = db.get().collection('anonymous_name_data')
  anonymousNameCollection.findOne({"userID":userID}, cb)
}

exports.ResponderData = function(responderID, cb) {
  var responderCollection = db.get().collection('responder_data')
  responderCollection.find({"responder":responder}, cb)
}

exports.allQuestions = function(cb) {
  var questionCollection = db.get().collection('question_data');
  questionCollection.find({}).toArray(cb);
}

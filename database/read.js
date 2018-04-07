var db = require('./db')

exports.UserUsername = function(username, cb) {
  var userCollection = db.get().collection('user_data')
  userCollection.findOne({"userName":username}, cb);
}

exports.UserUsernamePassword = function(username, password, cb) {
  var userCollection = db.get().collection('user_data')
  userCollection.findOne({"userName":username, "password":password}, cb);
}

exports.UserUserID = function(userID, cb) {
  var userCollection = db.get().collection('user_data')
  userCollection.findOne({"userID":userID}, cb)
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
  responderCollection.findOne({"responder":responder}, cb)
}

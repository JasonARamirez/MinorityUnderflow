var db = require('./db')

exports.User = function(username, password, userID, cb) {

}

exports.Question = function(questionID, questionStr, askerID, askerAnonymousName, cb) {

}

exports.AnonymousName = function(userID, questionIDs, anonymousName, cb) {

}

exports.Responses = function(responderID, questionID, questionStr, anonymousName, time, numUpvotes, cb) {

}

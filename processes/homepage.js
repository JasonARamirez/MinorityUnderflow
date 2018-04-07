var dbCreate = require('../database/create');
var dbRead = require('../database/read');
var utils = require('./utils');

exports.login = function(username, password, cb) {
  dbRead.UserUsernamePassword(username, password, function(err, result) {
    if (err != null || result == null) {
      cb(null, 'Incorrect username or password');
    } else {
      cb(result.userID);
    }
  });
}

exports.createAccount = function(username, password, cb) {
  dbRead.UserUsername(username, function(err, result) {
    if (err == null && result != null) {
      cb(null, 'username already exists');
    } else {
      var userIDExists = true;
      var newUserID = '';

      async.whilst(
        function () { return userIDExists; },
        function (callback) {
          newUserID = utils.createUUID();
          dbRead.UserUserID(newUserID, function(err, result){
            if(err != null) {
              userIDExists = false;
              callback(err)
            }
            userIDExists = result != null;
            callback();
          });
        },
        function (err) {
          if(err != null) {
            cb(null, 'Internal Server Error');
          } else{
            dbCreate.User(username, password, newUserID, function(err) {
              if(err != null) {
                cb(null, 'Internal Server Error');
              } else {
                cb(newUserID);
              }
            });
          }
        }
      );
    }
  });
}

exports.createQuestion = function(anonymousName, userID, question, cb) {
  var questionIDExists = true;
  var newQuestionID = '';

  async.whilst(
    function () { return questionIDExists; },
    function (callback) {
      newQuestionID = utils.createUUID();
      dbRead.QuestionData(newQuestionID, function(err, result){
        if(err != null) {
          questionIDExists = false;
          callback(err)
        }
        questionIDExists = result != null;
        callback();
      });
    },
    function (err) {
      if(err != null) {
        cb(null, 'Internal Server Error');
      } else{
        dbCreate.Question(newQuestionID, question, userID, anonymousName, function(err) {
          if(err != null) {
            cb(null, 'Internal Server Error');
          } else {
            cb(newQuestionID);
          }
        });
      }
    }
  );
}

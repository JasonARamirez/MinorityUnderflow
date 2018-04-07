var async = require('async');
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
      console.log(err);
      var userIDExists = true;
      var newUserID = '';

      async.whilst(
        function () { return userIDExists; },
        function (callback) {
          newUserID = utils.createUUID();
          dbRead.UserUserID(newUserID, function(err, result){
            if(err != null) {
              console.log(err);
              userIDExists = false;
              callback(err)
            } else {
              userIDExists = result != null;
              callback();
            }
          });
        },
        function (err) {
          if(err != null) {
            cb(null, 'Internal Server Error 1');
          } else{
            dbCreate.User(username, password, newUserID, function(err) {
              if(err != null) {
                cb(null, 'Internal Server Error 2');
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
          console.log(err);
          questionIDExists = false;
          callback(err)
        } else {
          questionIDExists = result != null;
          callback();
        }
      });
    },
    function (err) {
      if(err != null) {
        cb(null, 'Internal Server Error 1');
      } else{
        var time = new Date().getTime();
        dbCreate.Question(newQuestionID, question, userID, anonymousName, time, function(err) {
          if(err != null) {
            cb(null, 'Internal Server Error 2');
          } else {
            cb(newQuestionID);
          }
        });
      }
    }
  );
}

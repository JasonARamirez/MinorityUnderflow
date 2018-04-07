var dbCreate = require('../database/create');
var dbRead = require('../database/read');
var dbUpdate = require('../database/update');

exports.answerQuestion = function(userID, anonymousName, questionID, responseStr, cb) {
  dbRead.QuestionData(questionID, function(err, result) {
    if (err != null) {
      console.log(err);
      cb('Internal Server Error 1');
    } else {
      var time = new Date().getTime();
      dbCreate.Responses(userID, questionID, result.questionString, responseStr, anonymousName, time, 0, function(err) {
        if (err != null) {
          console.log(err);
          cb('Internal Server 2');
        } else {
          dbUpdate.addResponseToQuestion(questionID, anonymousName, responseStr, time, function(err) {
            if (err != null) {
              console.log(err);
              cb('Internal Server Error 3');
            } else {
              dbRead.AnonymousNameData(userID, function(err, result) {
                if (err != null) {
                  console.log(err);
                  cb('Internal Server Error 4');
                } else if (result != null) {
                  var questionIDs = result.questionIDs;
                  if (questionID in questionIDs) {
                    cb();
                  } else {
                    dbUpdate.chooseAnonymousName(questionID, userID, anonymousName, function(err) {
                      if (err != null) {
                        console.log(err);
                        cb('Internal Server Error 5');
                      } else {
                        cb();
                      }
                    });
                  }
                } else {
                  dbCreate.AnonymousName(userID, questionID, anonymousName, function(err) {
                    if (err != null) {
                      console.log(err);
                      cb('Internal Server Error 6');
                    } else {
                      cb();
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
}

exports.getQuestion = function(questionID, userID, cb) {
  dbRead.QuestionData(questionID, function(err, resultQuestion) {
    if (err != null) {
      console.log(err);
      cb('Internal Server Error 1');
    } else {
      delete resultQuestion._id;
      delete resultQuestion.askerID;

      if (userID != '') {
        dbRead.AnonymousNameData(userID, function(err, resultName) {
          if (err != null) {
            console.log(err);
            cb(null, null, 'Internal Server Error 2');
          } else if(resultName == null){
            cb(resultQuestion);
          } else {
            var questionIDs = resultName.questionIDs;
            if (questionID in questionIDs) {
              var anonymousName = questionIDs[questionID];
              cb(resultQuestion, anonymousName);
            } else {
              cb(resultQuestion);
            }
          }
        });
      } else {
        cb(resultQuestion)
      }
    }
  });
}

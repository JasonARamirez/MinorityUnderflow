$(document).ready(function() {
  $.get('/homepage/getLatestQuestions', function(dataStr) {
    var data = JSON.parse(dataStr);
    if (data.success) {
      var questionsArr = data.questionsArr;
      var mytable = $("<table border='2'></table>"); // creates DOM elements
      var mytablebody = $('<tbody></tbody>');

      for (var index in questionsArr) {
        var row = $('<tr></tr>');
        var cell = $('<td></td>');
        var questionText = $('<h3><a onclick=\"goToQuestion(\'' + questionsArr[index].questionID + '\')\">' + questionsArr[index].questionStr + '</a></h3>');
        cell.append(questionText);
        row.append(cell);
        mytablebody.append(row);
      }

      mytable.append(mytablebody);
      $('#questions').append(mytable);
    }
  });
});

var goToQuestion = function(questionID) {
  sessionStorage.setItem('questionID', questionID);
  window.location.href = '/questions.html';
};

var createQuestion = function() {
  if (sessionStorage.getItem("userID") == null) {
    alert('You are not logged in');
    return;
  }
  var anonymousName = $('#anonymousName').val();
  var question = $('#question').val();
  var userID = sessionStorage.getItem('userID');
  $.get('/homepage/createQuestion', {anonymousName:anonymousName, userID:userID, question:question}, function(dataStr) {
    var data = JSON.parse(dataStr);

    if(data.success) {
      goToQuestion(data.questionID);
    }
  });
}

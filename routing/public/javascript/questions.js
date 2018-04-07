$(document).ready(function() {
  if(sessionStorage.getItem('questionID') == null) {
    window.location.href = '/';
    return;
  }

  var params = {
    'questionID' : sessionStorage.getItem('questionID'),
    'userID' : sessionStorage.getItem('userID') || ''
  }

  $.get('/question/getQuestion', params, function(dataStr) {
    var data = JSON.parse(dataStr);
    if (data.success) {
      var responseArr = data.qObj.responses;
      var questionString = data.qObj.questionString;
      var askerAnonymousName = data.qObj.askerAnonymousName;

      if(data.anonymousName != null) {
        sessionStorage.setItem('anonymousName', data.anonymousName);
        $('#fname').val(data.anonymousName);
      }

      $('#anonName').text('Question Asker: ' + askerAnonymousName);
      $('#question').text('Question: ' + questionString);

      var mytable = $("<div class=\"col-full\"></div>");
      var mytablebody = $('<ol class=\"commentlist\"></ol>');

      for (var index in responseArr) {
        var anonymousName = responseArr[index].anonymousName;
        var responseStr = responseArr[index].responseString;
        var row = $('<li class="depth-1 comment"></li>');
        var cell = $('<div class="comment__content">');
        var name = $('<div class="comment__info"><cite><b>'+ anonymousName + '</b></cite></div>');
        cell.append(name);
        var response = $('<div class="comment__text"><p style="width: 100%">' + responseStr + '</p></div>');
        cell.append(response);
        row.append(cell);
        mytablebody.append(row);
      }

      mytable.append(mytablebody);
      $('#comments').append(mytable);
    }
  });
});

var answerQuestion = function() {
  if (sessionStorage.getItem("userID") == null) {
    alert('You are not logged in');
    return;
  }

  var questionID = sessionStorage.getItem('questionID');
  var userID = sessionStorage.getItem('userID');
  var anonymousName = $('#fname').val();
  var response = $('#subject').val();

  var params = {
    userID : userID,
    anonymousName : anonymousName,
    questionID : questionID,
    response : response
  }

  $.get('/question/answerQuestion', params, function(dataStr) {
    var data = JSON.parse(dataStr);

    if(data.success) {
      location.reload();
    }

  });
  
}

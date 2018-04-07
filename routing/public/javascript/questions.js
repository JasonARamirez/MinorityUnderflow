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
        var response = $('<div class="comment__text"><p>' + responseStr + '</p></div>');
        cell.append(response);
        row.append(cell);
        mytablebody.append(row);
      }

      mytable.append(mytablebody);
      $('#comments').append(mytable);
    }
  });
});

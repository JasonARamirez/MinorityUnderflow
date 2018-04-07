var loginFunction = function() {
  var username = $('#login-username').val();
  var password = $('#login-password').val();
  $.get("/homepage/login", {username:username, password:password}, function(output) {
    var data = JSON.parse(output);
    if(data.success == true) {
      sessionStorage.setItem('userID', data.userID);
      window.location.href = '/';
    }
  });
}

var createAccountFunction = function() {
  var username = $('#username').val();
  var password = $('#password').val();
  $.get("/homepage/createAccount", {username:username, password:password}, function(output) {
    var data = JSON.parse(output);
    if(data.success == true) {
      sessionStorage.setItem('userID', data.userID);
      window.location.href = '/';
    }
  });
}

var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = process.env.PORT || 8080;
var database = require('./database/db')
const db_url = process.env.MONGODB_URI || "mongodb://heroku_p3n62pp2:vrn6ep6jmq167gogh9jhk3liuj@ds237379.mlab.com:37379/heroku_p3n62pp2";

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/routing/public/html/index.html');
});

var pubFiles = require('./routing/public');
app.use('/', pubFiles);

var homepage = require('./routing/homepage');
app.use('/homepage', homepage);

var personal = require('./routing/personal');
app.use('/personal', personal);

var question = require('./routing/question');
app.use('/question', question);

database.connect(db_url, 'minority_underflow', function(err) {
  if(err != null) {
    console.log(err);
  }

  server.listen(port, function(){
    console.log('listening on *:' + port);
  });
});

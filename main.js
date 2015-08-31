var router = require("./router.js");
//Problem: We need a simple way to look at a user's badge count and JavaScript point from a web browser
//Solution: Use Node.js to perform the profile look ups and server our template via HTTP


var http = require('http');
http.createServer(function (request, response) {
  /*app.set('view engine', 'jade');
  app.get('/', function (request, response) {
  	response.render('index', {title: 'Hey', message: 'Hellow there!'});
  })
  */
  router.home(request, response);
  router.user(request, response);  
}).listen(3000);
console.log('Server running at localhost:3000');

/*
var app = require('express').createServer();
app.set('views',__dirname + '/views');
app.use(express.static(__dirname + '/../public'));
app.get('/', function(request, response){response.render('index.jade', {title: 'Vince'});});
app.listen(3000);
*/
// JavaScript Document
// Creason RE Server
// Server file
// 5/26/17
var express = require('express');

// Init App
var app = express();

//  Start static file server
app.use(express.static(__dirname + '/public'));

app.listen(8080, "127.0.0.1", function(){
	console.log("Web Server running at 127.0.0.1:8080");
})


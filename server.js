var express=require('express');
var app=express();
var Index=require('./routes/index');
var bodyparser = require('body-parser');
var path = require('path');

app.use(express.static(__dirname + '/views'));

app.get('/', function(req,res){
	res.sendFile('signup.html');
});

app.listen(3000, function(req,res){
	console.log("magic happens at 3000");
});

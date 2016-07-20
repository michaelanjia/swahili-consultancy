var express = require('express');
var path = require('path');
var route = express.Router();

route.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "signup.html" );
})


module.exports=route;

var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var fs = require('fs');

var serverPort = process.env.NODE_PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/jsonDB'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(methodOverride());

app.get('*', function (req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(serverPort);
console.log('Server started listening on ', serverPort);

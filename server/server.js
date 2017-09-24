/*jshint node: true*/

'use strict';

let express = require('express');
let app = express();
let morgan = require('morgan');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let path = require('path');
let fs = require('fs');

let serverPort = process.env.NODE_PORT || 3000;

app.use(express.static(__dirname + '/../public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(methodOverride());

// Routes
app.use('/api', require('./routes/api-routes'));

app.get('*', function (req, res){
	console.log('getting catchall', __dirname);
	res.sendFile(path.resolve(__dirname + '/../public/index.html'));
});

app.listen(serverPort);
console.log('Server started listening on ', serverPort);

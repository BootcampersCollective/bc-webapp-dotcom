var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var fs = require('fs');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/jsonDB'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(methodOverride());

app.get('/api/users', function (req, res) {
	res.sendFile(__dirname + '/jsonDB/users.json');
});

app.post('/api/auth', function (req, res) {
	var output = null;
	fs.readFile(__dirname + '/jsonDB/auth.json', 'utf-8', function (err, data) {
		if(!err) {
			var obj = JSON.parse(data);
			obj.map(function (item, index) {
				if (item.authToken === req.body.token && item.status === 1) {
					output = true;
				}
			});
			if (output === true) {
				res.json(output);
			} else {
				res.sendStatus(401);
			}
		}
	});

});

app.get('/api/about', function(req, res) {
	console.log('req.param', req.param);
});

app.get('*', function (req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.NODE_PORT || 3000);
console.log('Server started listening on 3030');

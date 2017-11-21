/*jshint node: true*/

'use strict';
let nodemailer = require('../services/nodemailer.service');

module.exports = function (req, res) {
	console.log('sendMail', req);
	nodemailer.sendMail(req, function(err,response,data) {
        console.log('nodemailer sendMail data', data);
		if (!err) {
			res.status(200);
		}
	});
};
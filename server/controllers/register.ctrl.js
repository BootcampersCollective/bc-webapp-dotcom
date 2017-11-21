/*jshint node: true*/

'use strict';
let nodemailer = require('../services/nodemailer.service');
let sendgrid = require('../services/sendgrid.service');

module.exports = function (req, res) {
	// nodemailer.sendMail(req.body, function(err,response,data) {
    //     console.log('nodemailer sendMail data', data);
	// 	if (!err) {
	// 		res.status(200);
	// 	}
    // });
    sendgrid.sendMail(req.body, function(err,response,data) {
        console.log('sendgrid sendMail err, response, data', err, response, data);
        if(!err) {
            res.status(200);
        }
    });
};
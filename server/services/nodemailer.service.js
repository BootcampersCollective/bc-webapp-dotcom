/*jshint node: true*/

'use strict';
const nodemailer = require('nodemailer');

function sendMail(req, cb) {
    console.log('nodemailService req', req);
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_SMTP_USER,
            pass: process.env.GMAIL_SMTP_PASS
        }
    });
    const mailOptions = {
        from: 'no-reply@bootcamperscollective.com',
        to: 'wes@bootcamperscollective.com',
        subject: 'NodeMailer test',
        body: 'This is a test message'
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log('err', err);
        } else {
            console.log('info', info);
        }
    });
}

const nodemailService = {
	sendMail: sendMail
};

module.exports = nodemailService;
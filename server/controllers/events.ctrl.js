/*jshint node: true*/

'use strict';
let meetup = require('../services/meetup.service');

module.exports = function (req, res) {
	console.log('getMeetupEvents');
	meetup.getEvents(function(err,response,data) {
		const object = JSON.parse(data);
		if (!err) {
			res.status(200).json(object);
		}
	});
};

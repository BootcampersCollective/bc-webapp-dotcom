/*jshint node: true*/

'use strict';

module.exports = (req, res) => {
	console.log('calendarCtrl');
	res.status(200).json({name: 'calendar'});
};

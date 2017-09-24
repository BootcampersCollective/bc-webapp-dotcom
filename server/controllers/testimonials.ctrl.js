/*jshint node: true*/

'use strict';

let testimonials = require('../../jsonDB/testimonials.json');

module.exports = function (req, res) {
	res.json(testimonials);
};

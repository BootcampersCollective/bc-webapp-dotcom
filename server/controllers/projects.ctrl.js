/*jshint node: true*/

'use strict';

let projects = require('../../jsonDB/projects.json');

module.exports = function (req, res) {
	res.status(200).json(projects);
};

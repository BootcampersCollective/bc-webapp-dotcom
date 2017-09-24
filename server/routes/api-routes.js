/*jshint node: true*/

'use strict';

const routes = require('express').Router();

routes.get('/testimonials', require('../controllers/testimonials.ctrl'));
routes.get('/projects', require('../controllers/projects.ctrl'));
routes.get('/calendar', require('../controllers/calendar.ctrl'));

module.exports = routes;

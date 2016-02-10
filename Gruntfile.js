module.exports = function (grunt) {
	'use strict';

	var loadTimer = require('time-grunt'),
			initTasks = require('load-grunt-tasks'),
			gruntOptions = require('./grunt/config'),
			taskOptions = gruntOptions.tasks,
			packagesOptions = gruntOptions.packages,
			loadConfigs = require('load-grunt-configs')(grunt, packagesOptions);

	loadTimer(grunt);
	initTasks(grunt, taskOptions);
	grunt.initConfig(loadConfigs);
	grunt.loadTasks('./grunt/tasks');
};

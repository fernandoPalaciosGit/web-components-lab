module.exports = function (grunt) {
	'use strict';

	var path = require('path'),
		taskName = path.basename(module.filename, '.js'),
		taskList = ['jscs:dist', 'jshint:dist', 'eslint:dist'];

	grunt.registerTask(taskName, taskList);
};

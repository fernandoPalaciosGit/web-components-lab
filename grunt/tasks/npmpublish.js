module.exports = function (grunt) {
	'use strict';

	var path = require('path'),
		taskName = path.basename(module.filename, '.js'),
		taskList = ['jslint', 'clean:dist', 'browserify:dist'];

	grunt.registerTask(taskName, taskList);
};

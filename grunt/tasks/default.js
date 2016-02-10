module.exports = function (grunt) {
	'use strict';

	var path = require('path'),
		taskName = path.basename(module.filename, '.js'),
		taskList = ['jslint', 'clean:dev', 'browserify:dev'];

	grunt.registerTask(taskName, taskList);
};

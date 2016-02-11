module.exports = function (grunt) {
	'use strict';

	var path = require('path'),
		_ = require('underscore'),
		taskName = path.basename(module.filename, '.js'),
		server = grunt.option('test') || false,
		aviableServers =  _.keys(require('../packages/shell')),
		taskList = ['shell:openChrome', 'shell:' + server];

	grunt.registerTask(taskName, function () {
		if (!server || _.indexOf(aviableServers, server) === -1) {
			grunt.fail.fatal('Sorry!!: We don\'t have yet that polyfill.', 4);

		} else {
			grunt.task.run(taskList);
		}
	});
};

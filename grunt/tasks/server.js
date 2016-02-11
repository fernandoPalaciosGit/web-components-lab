module.exports = function (grunt) {
	'use strict';

	var path = require('path'),
		_ = require('underscore'),
		taskName = path.basename(module.filename, '.js'),
		server = grunt.option.get('test') || false,
		aviableServers =  _.keys(require('../packages/shell')),
		taskList = ['shell:' + server, 'shell:openChrome'];

		if (!server || _.indexOf(aviableServers, server) === -1) {
			grunt.fail.fatal({msg: 'Sorry!!: We don\'t have yet that polyfill.'}, 4);
		} else {
			grunt.registerTask(taskName, taskList);
		}
	}
};

module.exports = {
	starterPolymer: {
		command: [
			'node test/server/http starterPolymer',
		].join('&&')
	},
	openChrome: {
		command: 'google-chrome localhost:9090/<%= grunt.option(\'test\') %>'
	}
};

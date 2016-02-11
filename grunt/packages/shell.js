module.exports = {
	starterPolymer: {
		command: 'node test/server/http starterPolymer'
	},
	openChrome: {
		command: [
			'googlePath=$(which google-chrome)',
			'${googlePath} http://localhost:9090\/\"<%= grunt.option(\'test\') %>\"'
		].join('&&')
	}
};

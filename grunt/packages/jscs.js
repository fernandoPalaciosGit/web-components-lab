module.exports = {
	options: {
		config: '<%= config.runtimePath %>/.jscsrc',
		verbose: false,
		fix: false
	},
	dist: {
		files: [{
			src: '<%= jsLinterPaths %>'
		}]
	}
};

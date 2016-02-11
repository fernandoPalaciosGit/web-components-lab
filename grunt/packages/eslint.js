module.exports = {
	options: {
		configFile: '<%= config.runtimePath %>/.eslintrc',
		format: require('eslint-tap')
	},
	dist: {
		files: [{
			src: '<%= jsLinterPaths %>'
		}]
	}
};

module.exports = {
	options: {
		configFile: '.eslintrc',
		format: require('eslint-tap')
	},
	dist: {
		src: '<%= jsLinterPaths %>'
	}
};

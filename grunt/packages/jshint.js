module.exports = {
	options: {
		jshintrc: '<%= config.runtimePath %>/.jshintrc',
		reporter: require('jshint-stylish')
	},
	dist: '<%= jsLinterPaths %>'
};

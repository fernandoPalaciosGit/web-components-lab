module.exports = {
	options: {
		jshintrc: '.jshintrc',
		reporter: require('jshint-stylish')
	},
	dist: '<%= jsLinterPaths %>'
};

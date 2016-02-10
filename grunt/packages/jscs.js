module.exports = {
	options: {
		config: '.jscsrc',
		verbose: false,
		fix: false
	},
	dist: {
		files: {
			src: '<%= jsLinterPaths %>'
		}
	}
};

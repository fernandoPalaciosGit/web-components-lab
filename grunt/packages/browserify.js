module.exports = {
	options: {
		debug: true
	},
	dist: {
		options: {
			debug: false
		},
		files: [{
			expand: true,
			cwd: '<%= compileJS.bundleDir %>',
			src: '<%= compileJS.bundleSrc %>',
			extDot: 'last',
			dest: '<%= compileJS.dist.bundleCompile %>',
			ext: '.js'
		}]
	},
	dev: {
		files: [{
			expand: true,
			cwd: '<%= compileJS.bundleDir %>',
			src: '<%= compileJS.bundleSrc %>',
			extDot: 'last',
			dest: '<%= compileJS.dev.bundleCompile %>',
			ext: '.js'
		}]
	}
};

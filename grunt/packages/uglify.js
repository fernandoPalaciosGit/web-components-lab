module.exports = {
	options: {
		mangle: true
	},
	dist: {
		files: [{
			expand: true,
			cwd: '<%= compileJS.dist.bundleCompile %>',
			src: '<%= compileJS.bundleSrc %>',
			dest: '<%= compileJS.dist.bundleCompile %>',
			ext: '.bundle.js'
		}]
	}
};

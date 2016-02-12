exports.packages = {
	config: {
		src: 'grunt/packages/*.js',
		runtimePath: 'grunt/runtime-config'
	},
	jsLinterPaths: [
		'Gruntfile.js',
		'dev/**/*.js',
		'polyfills/**/*.js',
		'grunt/**/*.js',
		'test/**/*.js',
		'!test/bundle/**',
		'!test/bower_components/**'
	],
	compileJS: {
		bundleDir: 'dev',
		bundleSrc: ['*.js'],
		dev: {
			bundleCompile: 'test/bundle'
		},
		dist: {
			bundleCompile: 'dist',
			bundleClean: 'dist/!(*.bundle.js)'
		}
	}
};

exports.tasks = {
	config: 'package.json',
	pattern: ['grunt-*'],
	scope: 'devDependencies'
};

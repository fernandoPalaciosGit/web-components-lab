exports.packages = {
	config: {
		src: 'grunt/packages/*.js',
		runtimePath: 'grunt/runtime-config'
	},
	jsLinterPaths: [
		'Gruntfile.js',
		'dev/**/*.js',
		'!dev/bundle/**/*.js',
		'polyfills/**/*.js',
		'grunt/**/*.js',
		'test/**/*.js'
	],
	compileJS: {
		bundleDir: 'dev',
		bundleSrc: ['*.js'],
		dev: {
			bundleCompile: 'dev/bundle'
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

module.exports = {
	dev: ['<%= compileJS.dev.bundleCompile %>'],
	dist: ['<%= compileJS.dist.bundleCompile %>'],
	distBundle: ['<%= compileJS.dist.bundleClean %>']
};

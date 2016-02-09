module.exports = {
	options: {
    debug: true
  },
  production: {
    options: {
      debug: false
    },
    src: '<%= compileJS.entryPoint %>',
    dest: '<%= compileJS.bundle %>'
  }
};
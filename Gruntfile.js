module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: [
      	'Gruntfile.js',
      	'dev/**/*.js',
      	'polyfills/**/*.js',
      	'tasks/**/*.js',
      	'test/**/*.js'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint']);
};
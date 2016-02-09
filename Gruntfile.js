module.exports = function(grunt) {
  grunt.initConfig(require('./tasks/config'));
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.registerTask('jslint', ['jscs', 'jshint', 'eslint']);
  grunt.registerTask('npmpublish', [/*'jslint', 'browserify'*/]);
};
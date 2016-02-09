module.exports = function(grunt) {
  grunt.initConfig(require('task/config'));
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jscs');
  grunt.loadNpmTasks('grunt-contrib-eslint');
  grunt.registerTask('jslint', ['jscs', 'jshint', 'eslint']);
  grunt.registerTask('npmpublish', ['jslint', 'browserify']);
};
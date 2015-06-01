// `grunt build`
// Builds out an optimized site through (but not limited to) minification of CSS and HTML,
// as well as uglification and optimization of Javascript, and compression of images.

'use strict';

var taskConfig = function(grunt) {
  grunt.registerTask('build', 'Build a production ready version of your site.', [
    'clean:prod',
    'env:prod',
    
    'express:prod'
    
    'copy:prod',
    'concurrent',
    'useminPrepare',
    'concat:generated',
    'cssmin',
    
    'usemin',
    'htmlmin:prod',
    'uglify',
    'clean:tmp',
    'injector',
'wiredep',
    'browserify:prod'
    'sass:prod',
  'autoprefixer:prod'
  ]);

};

module.exports = taskConfig;

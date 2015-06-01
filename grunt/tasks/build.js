// `grunt build`
// Builds out an optimized site through (but not limited to) minification of CSS and HTML,
// as well as uglification and optimization of Javascript, and compression of images.

'use strict';

var taskConfig = function(grunt) {
  grunt.registerTask('build', 'Build a production ready version of your site.', [
    'clean:dist',
    'env:dev',
    
    'express:dist'
    
    'copy:dist',
    'concurrent',
    'useminPrepare',
    'concat:generated',
    'cssmin',
    
    'usemin',
    'htmlmin:dist',
    'uglify',
    'clean:tmp',
    'injector',
'wiredep',
    'browserify:dist'
    'sass:dist',
  'autoprefixer:dist'
  ]);

};

module.exports = taskConfig;

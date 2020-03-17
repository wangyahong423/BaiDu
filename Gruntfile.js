module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      target: {
        files: {
          'dist/index.html': './index.html'
        }
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/index.css': './index.css'
        }
      }
    },
    uglify: {
      release:{
        files:{
          'dist/index.js': './index.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['cssmin', 'htmlmin','uglify']);
};

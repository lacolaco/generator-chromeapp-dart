/*jshint camelcase: false*/
// Generated on 2014-07-10 using generator-chromeapp 0.2.8
'use strict';

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    yeoman: {
      app: 'app'
    },
    exec: {
      compile: {
        cmd: 'cd <%= yeoman.app %> && bash compile.sh'
      }
    },
    connect: {
      options: {
        port: 9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          livereload: 35729,
          base: [
            '<%= yeoman.app %>'
          ]
        }
      }
    },
    watch: {
      options: {
        spawn: false
      },
      livereload: {
        options: {
          livereload: '<%= connect.livereload.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/**/*.*'
        ]
      }
    }
  });

  grunt.registerTask('build', function (opt) {
    grunt.task.run([
      'exec:compile'
    ]);
  });

  grunt.registerTask('debug', function (opt) {
    grunt.task.run([
      'exec:compile',
      'connect:livereload',
      'watch'
    ]);
  });
};

module.exports = (grunt) ->

  matchdep = require 'matchdep'
  pkg = require './package'
  fs = require('fs')
  glob = require('glob')
  path = require('path')
  mkdirp = require('mkdirp')
  BASE_PATH = process.env.WORKSPACE or '../'

  grunt.initConfig
    path:
      src:  './s/'
      dist: './dist/'

    exec:
      webpack: 'webpack --colors'

    stylus:
      css:
        expand: true
        cwd: '<%= path.src %>'
        src: ['**/*.styl', '!**/_*.styl']
        dest: '<%= path.dist %>'
        ext: '.css'

    uglify:
      js:
        expand: true
        cwd: '<%= path.dist %>'
        src: ['**/*.js', '!vendors.js']
        dest: '<%= path.dist %>'
        ext: '.js'

    clean: [ '<%= path.dist %>**/*' ]

    watch:
      webpack:
        files: [
          '<%= path.src %>**/*.js',
          '<%= path.src %>**/*.styl',
          '<%= path.src %>**/*.vue'
        ]
        tasks: ['build']

  # Load Grunt plugins
  for plugin in matchdep.filterDev 'grunt-*'
    grunt.loadNpmTasks plugin unless plugin is 'grunt-cli'

  # Build task
  grunt.registerTask 'build_js',    [ 'clean', 'exec:webpack' ]
  grunt.registerTask 'build_style', [ 'clean', 'stylus' ]
  grunt.registerTask 'build',       [ 'clean', 'stylus', 'exec:webpack' ]

  # Default task
  grunt.registerTask 'default', [ 'watch' ]
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

    clean: [ '<%= path.dist %>**/*' ]

    watch:
      webpack:
        files: '<%= path.src %>**/*.js'
        tasks: ['build_js']
      gruntfile:
        files: 'Gruntfile.coffee'
        tasks: ['coffeelint']
      style:
        files: '<%= path.src %>**/*.styl'
        tasks: ['build_style']

  # Load Grunt plugins
  for plugin in matchdep.filterDev 'grunt-*'
    grunt.loadNpmTasks plugin unless plugin is 'grunt-cli'

  # Build task
  grunt.registerTask 'build_js',    [ 'clean', 'exec:webpack' ]
  grunt.registerTask 'build_style', [ 'clean', 'stylus' ]
  grunt.registerTask 'build',       [ 'clean', 'stylus', 'exec:webpack' ]

  # Default task
  grunt.registerTask 'default', [ 'watch' ]
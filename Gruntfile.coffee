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
      src:  './s'
      dist: './style'

    exec:
      webpack: 'webpack --colors'

    clean: [ './dist/**/*' ]

    watch:
      webpack:
        files: './s/**/*.js'
        tasks: ['build']
      gruntfile:
        files: 'Gruntfile.coffee'
        tasks: ['coffeelint']

  # Load Grunt plugins
  for plugin in matchdep.filterDev 'grunt-*'
    grunt.loadNpmTasks plugin unless plugin is 'grunt-cli'

  # Build task
  grunt.registerTask 'build', [ 'clean', 'exec:webpack' ]

  # Default task
  grunt.registerTask 'default', [ 'watch' ]
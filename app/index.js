'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var ChromeappDartGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous ChromeappDart generator!'));

    this.option('gulp', {
      desc: 'Use gulp',
      type: Boolean,
      default: false
    });

    this.gulp = this.options.gulp;

    var prompts = [
      {
        type: 'input',
        name: 'appName',
        message: 'Would you like to name this app?',
        default: "Hello Dart!"
      },
      {
        type: 'list',
        name: 'buildSystem',
        message: 'Do you want to use which "build system"?',
        choices: ['Grunt', 'gulp']
      }
    ];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;
      if(props.buildSystem === 'gulp') {
        this.gulp = true;
      }

      done();
    }.bind(this));
  },

  git: function() {
    this.copy('gitignore', '.gitignore');
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/dart');
    this.mkdir('app/js');
    this.mkdir('app/styles');
    this.mkdir('app/images');

    this.directory('dart', 'app/dart');
    this.directory('js', 'app/js');
    this.directory('styles', 'app/styles');
    this.directory('images', 'app/images');

    if (this.gulp) {
      this.copy('gulpfile.js', 'gulpfile.js');
    } else {
      this.copy('Gruntfile.js', 'Gruntfile.js');
      this.copy('compile.sh', 'app/compile.sh');
    }
    this.template('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('pubspec.yaml', 'app/pubspec.yaml');

    this.template('index.html', 'app/index.html');
    this.template('manifest.json', 'app/manifest.json');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('bowerrc', '.bowerrc');
  }
});

module.exports = ChromeappDartGenerator;

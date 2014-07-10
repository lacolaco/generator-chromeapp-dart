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

    var prompts = [
      {
        type: 'input',
        name: 'appName',
        message: 'Would you like to name this app?',
        default: "Hello Dart!"
      }
    ];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;

      done();
    }.bind(this));
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

    this.copy('Gruntfile.js', 'Gruntfile.js');
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('compile.sh', 'app/compile.sh');
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
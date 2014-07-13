/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('chromeapp-dart generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp-gulp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('chromeapp-dart:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      '.jshintrc',
      '.editorconfig',
      '.bowerrc',
      'package.json',
      'bower.json',
      'app/index.html',
      'app/dart/index.dart'
    ];

    helpers.mockPrompt(this.app, {
      'appName': "test app"
    });
    this.app.options['skip-install'] = true;
    this.app.options['gulp'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});

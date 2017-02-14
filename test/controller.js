'use strict';
var path = require('path');
var fs = require('fs-extra');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-slimapp:controller', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/controller'))
      .inTmpDir(function (dir) {
        var done = this.async();
        fs.copy(path.join(__dirname, 'TestApp'), dir, done);
      })
      .withPrompts({controllerName: 'TestController'})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'app/Controllers/TestController.php'
    ]);
  });
});

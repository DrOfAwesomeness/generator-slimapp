'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-slimapp:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        projectName: 'TestApp',
        projectDesc: 'An application generated for testing',
        projectVendor: 'TestCorp',
        projectLicense: 'MIT',
        projectNs: 'TestApp',
        friendlyName: 'Testing Application'
      })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'composer.json',
      'app/Controllers/HelloController.php',
      'app/Views/layout.html.twig',
      'config/routes.php',
      'init.php',
      'bower.json',
      '.bowerrc',
      'app/Views/index.html.twig',
      'public/index.php',
      'config/cli-config.php',
      'config.ini'
    ]);
  });
});

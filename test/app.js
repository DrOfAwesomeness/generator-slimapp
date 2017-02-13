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
        projectNs: 'TestAppNS',
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
      'config.ini',
      '.gitignore',
      '.gitattributes',
      'config.ini.dist'
    ]);
  });

  it('fills composer.json with the correct information', function () {
    // eslint-disable-next-line new-cap
    assert.JSONFileContent('composer.json', {
      name: 'TestCorp/TestApp',
      description: 'An application generated for testing',
      license: 'MIT',
      require: {
        'slim/slim': '3.7.0',
        'doctrine/orm': '^2.5',
        'doctrine/migrations': '^1.5',
        'tracy/tracy': '^2.4',
        'twig/twig': '^2.1'
      },
      autoload: {
        'psr-4': {
          'TestAppNS\\': 'app/'
        }
      }
    });
  });
});

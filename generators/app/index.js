'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the wonderful ' + chalk.red('generator-slimapp') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'What is the project name?'
    }, {
      type: 'input',
      name: 'projectDesc',
      message: 'What is the project description?'
    }, {
      type: 'input',
      name: 'projectVendor',
      message: 'Who is the project vendor?'
    }, {
      type: 'input',
      name: 'projectLicense',
      message: 'What license does the project use?'
    }, {
      type: 'input',
      name: 'projectNs',
      message: 'What is the project namespace?'
    }, {
      type: 'input',
      name: 'friendlyName',
      message: 'What is the application\'s friendly name?'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    var tplFiles = ['composer.json', 'app/Controllers/HelloController.php', 'app/Views/layout.html.twig', 'config/routes.php', 'init.php', 'bower.json', '.bowerrc'];
    var normalFiles = ['app/Views/index.html.twig', 'public/index.php', 'config/cli-config.php', 'config.ini', 'config.ini.dist', 'migrations.yml'];
    tplFiles.forEach(function (file) {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(file),
        this.props
      );
    }.bind(this));

    normalFiles.forEach(function (file) {
      this.fs.copy(
        this.templatePath(file),
        this.destinationPath(file)
      );
    }.bind(this));

    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copy(
      this.templatePath('gitattributes'),
      this.destinationPath('.gitattributes')
    );
  },

  install: function () {
    this.installDependencies({
      npm: false,
      yarn: false,
      bower: true
    });
  }
});

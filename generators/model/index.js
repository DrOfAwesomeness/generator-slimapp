'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the amazing ' + chalk.red('generator-slimapp') + ' generator!'
    ));

    var composerData = this.fs.readJSON(this.destinationPath('composer.json'));
    var fullNs = Object.keys(composerData.autoload['psr-4'])[0];
    this.projectNs = fullNs.substr(0, fullNs.length - 1);

    var prompts = [{
      type: 'input',
      name: 'modelName',
      message: 'What would you like to name this model?'
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
      this.props.projectNs = this.projectNs;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('model.php'),
      this.destinationPath('app/Models/' + this.props.modelName + '.php'),
      this.props
    );
  },

  install: function () {
    // Nothing to do here
  }
});

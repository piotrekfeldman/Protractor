import { browser } from "protractor";

exports.config = {
  // set to "custom" instead of cucumber.
  directConnect:true,
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  capabilities: {
    browserName: 'chrome'
  },

  // require feature files
  specs: [
    '../features/demo.feature' // accepts a glob
  ],

  cucumberOpts: {
    // require step definitions
    tags:'@Angular or @Calculator',
    format:'json:./cucumberreport.json',
    
    require: [
      './stepDefinitions/*.js' // accepts a glob
    ]
  },
  
  onComplete: () => {

    var reporter = require('cucumber-html-reporter');
     
    var options = {
        theme: 'bootstrap',
        jsonFile: './cucumberreport.json',
        output: './cucumberreport.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  83.0.4103.116",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
    reporter.generate(options);
    },
};

import {Config} from "protractor";
// An example configuration file
export let config: Config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['dataElement.js'],
    format:'json:./cucumberreportBasic.json',

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    },

    onComplete: () => {

      var reporter = require('cucumber-html-reporter');
       
      var options = {
          theme: 'bootstrap',
          jsonFile: './cucumberreportBasic.json',
          output: './cucumberreportBasic.html',
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
  
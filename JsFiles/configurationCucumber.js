"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    // set to "custom" instead of cucumber.
    directConnect: true,
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
        tags: '@Angular or @Calculator',
        format: 'json:./cucumberreport.json',
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
                "App Version": "0.3.2",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbkN1Y3VtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlndXJhdGlvbkN1Y3VtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsT0FBTyxDQUFDLE1BQU0sR0FBRztJQUNmLHVDQUF1QztJQUN2QyxhQUFhLEVBQUMsSUFBSTtJQUNsQixTQUFTLEVBQUUsUUFBUTtJQUVuQiwyQ0FBMkM7SUFDM0MsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFL0QsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFFRCx3QkFBd0I7SUFDeEIsS0FBSyxFQUFFO1FBQ0wsMEJBQTBCLENBQUMsaUJBQWlCO0tBQzdDO0lBRUQsWUFBWSxFQUFFO1FBQ1osMkJBQTJCO1FBQzNCLElBQUksRUFBQyx5QkFBeUI7UUFDOUIsTUFBTSxFQUFDLDRCQUE0QjtRQUVuQyxPQUFPLEVBQUU7WUFDUCx3QkFBd0IsQ0FBQyxpQkFBaUI7U0FDM0M7S0FDRjtJQUVELFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFFZixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUVqRCxJQUFJLE9BQU8sR0FBRztZQUNWLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsTUFBTSxFQUFFLHVCQUF1QjtZQUMvQixzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFO2dCQUNOLGFBQWEsRUFBQyxPQUFPO2dCQUNyQixrQkFBa0IsRUFBRSxTQUFTO2dCQUM3QixTQUFTLEVBQUUsdUJBQXVCO2dCQUNsQyxVQUFVLEVBQUUsWUFBWTtnQkFDeEIsVUFBVSxFQUFFLFdBQVc7Z0JBQ3ZCLFVBQVUsRUFBRSxRQUFRO2FBQ3ZCO1NBQ0osQ0FBQztRQUNGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUNKLENBQUMifQ==
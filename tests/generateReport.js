"use strict";


var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: './reports/leet_cucumber_report.json',
    output: './reports/leet_cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Version":"0.0.1",
    }
};

reporter.generate(options);
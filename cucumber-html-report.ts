const moment = require('moment');
const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "./reports/json", // ** Path of .json file **//
  reportPath: "./reports/html",
  displayDuration: true,
  reportName: 'Cypress Cucumber TypeScript Automation Test Report',
  hideMetadata: false,
  metadata: {
    browser: {
      name: "chrome",
      version: "114",
    },
    device: "MacBook Pro",
    platform: {
      name: "Mac OS",
      version: "Ventura 13.4.1",
    },
  },
  customData: {
    title: 'Run info',
    data: [
        { label: 'Project', value: 'Web App Frontend Automation' },
        { label: 'Environment', value: 'Localhost' },
        { label: 'Platform', value: 'Mac' },
        { label: 'App Version', value: '1.0.1' },
        { label: 'From', value: 'Cypress Run CLI' },
        { label: 'Date', value: moment().format('llll') },
        { label: 'Video', value: '$project-root/cypress/videos' }
    ]
  }
});

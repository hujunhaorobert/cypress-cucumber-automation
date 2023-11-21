import { defineConfig } from "cypress";
import _ from 'lodash';
import { deleteAsync } from 'del';
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const fs = require('fs');

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  // Workaround for failure: GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels
  on('before:browser:launch', (browser, launchOptions) => {
    // `args` is an array of all the arguments that will
    // be passed to browsers when it launches
    launchOptions.args.push("--disable-3d-apis");
    console.log(launchOptions.args); // print all current args
    return launchOptions;
  });
  ///
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  ///
  on('task', {
    isFileExisting(filename) {
      return fs.existsSync(filename);
    },
  });
  ///
  // require('cypress-mochawesome-reporter/plugin')(on);
  allureWriter(on, config);

  //ToDo
  //You can use Cypress's after:spec event listener that fires after each spec file is run 
  //to delete the recorded video for specs that had no retry attempts or failures. 
  //Deleting passing and non-retried videos after the run can save resource space on the 
  //machine as well as skip the time used to process, compress, and upload the video to Cypress Cloud.
  //Only upload videos for specs with failing or retried tests
  // on('after:spec', (spec, results) => {
  //   if (results && results.video) {
  //     // Do we have failures for any retry attempts?
  //     const failures = _.some(results.tests, (test) => {
  //       return _.some(test.attempts, { state: 'failed' })
  //     })
  //     if (!failures) {
  //       // delete the video if the spec passed and no tests retried
  //       return deleteAsync(results.video);
  //     }
  //   }
  // });
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  experimentalWebKitSupport: true,
  experimentalModifyObstructiveThirdPartyCode: true,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  // reporter: 'cypress-mochawesome-reporter',
  // reporterOptions: {
  //   //if not specify below reportDir, mochawesome report by default will be stored under cypress/reports folder
  //   reportDir:'cypress/mochawesomeReport',
  //   charts: true,
  //   reportPageTitle: 'custom-title',
  //   embeddedScreenshots: true,
  //   inlineAssets: true,
  //   saveAllAttempts: false,
  //   debug: true
  // },
  e2e: {
    setupNodeEvents,
    video: true,
    screenshotsFolder: "cypress/screenshots",
    retries: {
      runMode: 0,
      openMode: 0
    },
    screenshotOnRunFailure: true,
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://magento.softwaretestingboard.com",
    chromeWebSecurity: false,
    env: {
      allureReuseAfterSpec: true,
      configFile: 'dev'
    },
  },
});

import { defineConfig } from "cypress";
import _ from 'lodash';
import { deleteAsync } from 'del';
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const fs = require('fs');

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on('before:browser:launch', (browser, launchOptions) => {
    launchOptions.args.push("--disable-3d-apis");
    console.log(launchOptions.args); // print all current args
    return launchOptions;
  });
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  on('task', {
    isFileExisting(filename) {
      return fs.existsSync(filename);
    },
  });
  allureWriter(on, config);
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

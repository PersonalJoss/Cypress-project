const { defineConfig } = require("cypress");
const allureWrite = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    defaultBrowser: 'chrome',
    setupNodeEvents(on, config) {
      allureWrite(on, config);
      return config;
    },
    env: {
      allureReuseAfterSpec: true
    }
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "http://localhost:5000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

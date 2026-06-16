const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  defaultCommandTimeout: 4000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

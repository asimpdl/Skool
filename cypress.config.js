const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1980,
    viewportHeight: 1080,
  },
});

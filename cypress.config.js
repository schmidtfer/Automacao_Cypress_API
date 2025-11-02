const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://api.restful-api.dev',
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) { 
      // implement node event listeners here
    },
  },
});



//adiciono aqui o baseURL para não precisar passar toda a URL sempre
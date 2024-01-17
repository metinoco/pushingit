const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    baseUrl: "https://pushing-it.vercel.app/",
    // baseUrl: 'https://pushing-front.vercel.app/',
    // watchForFileChanges: false, //no se ejecuta el runner de cypress cada vez que se guarda el archivo
    defaultCommandTimeout: 5000 //ajusta el tiempo de espera por default de cypress
  },

  env: {
    "usuario": "pushingit",
    "password": "123456!"
  }
});

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fileServerFolder: '.',
  fixturesFolder: './src/fixtures',
  modifyObstructiveCode: false,
  video: false,
  screenshotsFolder: '../../dist/cypress/apps/lda-e2e/screenshots',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:4200/tech',
    specPattern: './src/integration/**/*.feature',
    supportFile: './src/support/index.ts',
  },
})

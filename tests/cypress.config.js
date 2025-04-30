module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    testIsolation: true,
    video: false,
    screenshotOnRunFailure: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    retries: {
      runMode: 0,
      openMode: 0,
    }
  },
};
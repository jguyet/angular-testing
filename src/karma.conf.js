// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
      captureConsole: true // capture console output
    },
    /** Coverage section */
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
      /** Possible force minus coverage for example 80% of minus covering is best practice */
    },
    /** Custom Browser declaration */
    customLaunchers: {
        /** Chrome headless mode */
        ChromeHeadless: {
            base: 'Chrome',
            flags: [
                '--headless',
                '--remote-debugging-port=9222',
            ]
        },
        /** Firefox headless mode */
        FirefoxHeadless: {
            base: 'Firefox',
            flags: [
                '-headless'
            ],
        }
    },
    reporters: ['progress', 'kjhtml'],
    /** port of karma */
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    /** Auto watch continious testing */
    autoWatch: false,
    /** Browsers testing */
    browsers: ['ChromeHeadless', 'FirefoxHeadless'],
    /** Run Single test or continious testing */
    singleRun: true,
    browserDisconnectTimeout: 2000
  });
};
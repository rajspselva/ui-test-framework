const {
  BeforeAll,
  AfterAll,
  Before,
  After,
  setDefaultTimeout
} = require('cucumber')

const scope = require('../support/scope')
const constants = require('../support/constants')
const puppeteer = require('puppeteer')


BeforeAll(async function() {
  console.log("Before starting all test suite....");
  scope.driver = puppeteer
  let env = process.env.NODE_ENV
  console.log('Node Environment :', env);
  setDefaultTimeout(constants.pageTimeout * 1000)
})

Before(async function(scenario) {
  console.log("Before starting test....");

  const platform = process.platform === 'darwin' ? 'MAC OSX' : process.platform;

  let launchProperties = {
    headless: constants.headlessMode,
    devtools: false,
    ignoreHTTPErrors: true,
    args: [
      '--no-sandbox',
      '--window-size=1920, 1080',
      '--inspect-brk',
      '--remote-debugging-port=9000',
      '--disable-setuid-sandbox',
      '--enable-logging',
      '--v=1'
    ]
  }

  console.log('lauch browser instance .....................')
  scope.browser = await puppeteer.launch(launchProperties)
  scope.folder = '/'


  if (scope.page != null) {
    scope.page.close();
  }

  scope.page = await scope.browser.newPage()
  await scope.page.setCacheEnabled(false);

  await scope.page.setViewport({
    width: constants.width,
    height: constants.height
  })
})

After(async function() {
  console.log("After the test test....");
  await scope.browser.close();
})

AfterAll(async function() {
  console.log("After execution of all tests....");
  if (scope.browser != null) {
     await scope.browser.close()
  }
})

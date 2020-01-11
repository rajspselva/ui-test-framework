const {
  BeforeAll,
  AfterAll,
  Before,
  After,
  setDefaultTimeout
} = require('cucumber')

const puppeteer = require('puppeteer')

BeforeAll(async function () {
  console.log('Before starting all test suite....')

  setGlobalVariables()
  scope.driver = puppeteer

  let env = process.env.NODE_ENV
  console.log('Node Environment :', env)
  setDefaultTimeout(constants.pageTimeout * 1000)
})

Before(async function (scenario) {

  console.log('Before starting test ...')

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

  if (scope.browser != null) {
    scope.browser.close()
  }

  console.log('lauch browser instance ...')
  scope.browser = await puppeteer.launch(launchProperties)
  scope.folder = '/'


  console.log('browser page instance start ...')

  scope.page = await scope.browser.newPage()
  await scope.page.setCacheEnabled(false)

  await scope.page.setViewport({
    width: constants.width,
    height: constants.height
  })

  console.log('browser page instance end ...')
})

After(async function () {
  console.log('After the test test ...')
  await scope.browser.close()
})

AfterAll(async function () {
  console.log('After execution of all tests....')
  if (scope.browser != null) {
    await scope.browser.close()
  }
})

function setGlobalVariables() {
  global.scope = require('../support/scope')
  global.click = require('../support/click')
  global.card = require('../support/card')
  global.constants = require('../support/constants')
  global.dropdown = require('../support/dropdown')
  global.field = require('../support/field')
  global.title = require('../support/title')
  global.wait = require('../support/wait')
  global.span = require('../support/span')
  global.find = require('../support/find')
  global.link = require('../support/link')
  global.table = require('../support/table')

  global.chai = require('chai');
  chai.use(require('chai-exclude'));
  global.assert = chai.assert;
  global.expect = chai.expect;
}

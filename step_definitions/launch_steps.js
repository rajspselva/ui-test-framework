const {Given} = require('cucumber')
const constants = require('../support/constants')
const scope = require('../support/scope')
const wait = require('../support/wait')

Given('I lauch Google Applciation', async function () {
  try {
    await scope.page.goto(constants.baseUrl, {
      waitUntil: ['load', 'networkidle0', 'domcontentloaded']
    })

    await wait.elementVisible(scope.page, '[name="&lpos=sitenavdefault&lid=sitenav_main-logo"]')
    console.log("element visible")
  }
  catch(error) {
    console.log(error)
  }
});

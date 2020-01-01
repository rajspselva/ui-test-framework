const { Given, Then } = require('cucumber')
const constants = require('../support/constants')
const scope = require('../support/scope')
const wait = require('../support/wait')
const span = require('../support/span')

Given('I launch corparation fine Applciation', async function () {
  try {
    await scope.page.goto(constants.baseUrl, {
      waitUntil: ['load', 'networkidle0', 'domcontentloaded']
    })
    await wait.elementVisible(scope.page, '[name="email"]')
    console.log("element visible")
  }
  catch(error) {
    console.log("element not visible");
  }
});

Then('I should see the login page', async function() {
  await wait.elementVisible(scope.page, '[name="email"]')
  await wait.elementVisible(scope.page, '[name="password"]')
});

Then('I should see {string} message', function (errorMsg) {
  return span.readText(scope.page, errorMsg);
});

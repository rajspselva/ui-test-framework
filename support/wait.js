const constants = require('../support/constants')

async function elementVisible (page, selector) {
  return await page.waitForSelector(selector, {
    timeout: constants.pageTimeout,
    visible: true
  });
}

async function wait(page) {
  return page.waitFor(constants.pageTimeout)
}

module.exports = {
  elementVisible,
  wait
}

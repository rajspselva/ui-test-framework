async function elementVisible (page, selector) {
  return await page.waitForSelector(selector, {
    timeout: constants.pageTimeout,
    visible: true
  })
}

async function wait(page) {
  return page.waitFor(constants.pageTimeout * 1000)
}

module.exports = {
  elementVisible,
  wait
}

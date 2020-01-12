const { Then } = require('cucumber')

Then('I should see {string} title', async function (titleMsg) {
    return await title.readH2Title(scope.page, titleMsg)
})

Then('I should see {string} as page title', async function (titleMsg) {
    return await title.readElementTitleByCssSelector(scope.page, 'page-title', 'h4', titleMsg)
})

Then('I should see {string} label field', async function (labelText) {
  return await title.readLabelText(scope.page, labelText)
});

Then('I should see {string} as submenu title', async function (menuText) {
    const readText = await title.readTextByCssSelector(scope.page, 'page-header .nav-item')
    return assert.equal(readText, menuText)
})

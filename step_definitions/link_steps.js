const { When } = require('cucumber')

When('I click on {string} link', async function (linkText) {
 return await link.clickLinkByText(scope.page, linkText)
});

When('I click on {string} main menu link', async function (linkMenuText) {
    return await click.clickByCssSelectorAndText(scope.page, linkMenuText, 'nav-item a p', false)
})
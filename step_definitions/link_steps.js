const { When } = require('cucumber')

When('I click on {string} link', async function (linkText) {
 return await link.clickLinkByText(scope.page, linkText)
});

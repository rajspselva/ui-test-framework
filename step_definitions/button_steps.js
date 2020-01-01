 const { Then } = require('cucumber')
 const click = require('../support/click')
 const scope = require('../support/scope')

 Then('I click on {string} button', async function (buttonText) {
     return await click.clickByText(scope.page, buttonText);
 });
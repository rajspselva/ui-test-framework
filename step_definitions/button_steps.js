 const { Then, When } = require('cucumber')
 const { When } = require('cucumber')
 const click = require('../support/click')
 const scope = require('../support/scope')

 When('I click on {string} button', async function (buttonText) {
     return await click.clickByText(scope.page, buttonText);
 });

 When('I click on {string} message', async function (welcomeText) {
    return await click.clickByAnchortext(scope.page, welcomeText);
});

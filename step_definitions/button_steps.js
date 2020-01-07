 const { When } = require('cucumber')
 
 When('I click on {string} button', async function (buttonText) {
     return await click.clickByText(scope.page, buttonText)
 })

 When('I click on {string} message', async function (welcomeText) {
     return await click.clickByAnchortext(scope.page, welcomeText)
 })

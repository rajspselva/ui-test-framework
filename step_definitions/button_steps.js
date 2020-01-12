 const { When } = require('cucumber')

 When('I click on {string} button', async function (buttonText) {
     return await click.clickByText(scope.page, buttonText)
 })

 When('I click on {string} message', async function (welcomeText) {
     return await click.clickByAnchortext(scope.page, welcomeText, true)
 })

 When('I click on {string} message again', async function (welcomeText) {
     return await click.clickByAnchortext(scope.page, welcomeText, false)
 })

 When('I click on {string} link', async function (linkText) {
    return await click.clickByAnchortext(scope.page, linkText, false)
})
 When('I click on page no {string} link', async function (linkText) {
     return await click.clickByCssSelectorAndText(scope.page, linkText, 'pagination .page-item a')
 })

const { Then } = require('cucumber')

Then('I enter {string} in the {string} field', async function (inputValue, labelText) {
    await field.sendText(scope.page, labelText, inputValue)
})

const { Then } = require('cucumber')

Then('I enter {string} in the {string} field', async function (inputValue, labelText) {
    return await field.sendText(scope.page, labelText, inputValue)
})

Then('I should see {string} placeholder field', async function (placeholder) {
   return await field.findInputFieldPlaceHolderByName(scope.page, placeholder)
});

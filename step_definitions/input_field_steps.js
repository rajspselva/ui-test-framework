const { Then } = require('cucumber')
const field = require('../support/field')
const scope = require('../support/scope')


Then('I enter {string} in the {string} field', async function (inputValue, labelText) {
    await field.sendText(scope.page, labelText, inputValue)
});

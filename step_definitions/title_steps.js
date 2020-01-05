const { Then } = require('cucumber')
const title = require('../support/title')
const scope = require('../support/scope')

Then('I should see {string} title', async function (titleMsg) {
    return await title.readH2Title(scope.page, titleMsg);
});

Then('I should see {string} as card title and the amount as {string}', async function (titleMsg, amount) {
    return await title.readH5Title(scope.page, titleMsg);
});
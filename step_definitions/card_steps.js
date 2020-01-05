const {Then} = require('cucumber')
const card = require('../support/card')
const scope = require('../support/scope')


Then('I should see {string} card', async function (cardTitle) {
    await card.readCardTitleByCssSelector(scope.page, cardTitle);
});
const {Then} = require('cucumber')

Then('I should see {string} card', async function (cardTitle) {
    await card.readCardTitleByCssSelector(scope.page, cardTitle)
})
const { Then } = require('cucumber')

Then('I should see the following list of cards with fine amount and report links:', async function (dataTable) {
  const values = await card.findFineAmountCards()
  return assert.deepEqual(values, dataTable.rawTable)
});

Then('I should see the the following list of users with fine amount:', async function (dataTable) {
  const values = await card.findUserCollectionCard()
  return assert.deepEqual(values, dataTable.rawTable)
})

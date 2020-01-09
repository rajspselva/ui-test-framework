const {Then} = require('cucumber')

Then('I should see the following list of cards with fine amount and report links:', async function (dataTable) {
  const values = await card.findFineAmountCards()
  return assert.deepEqual(values, dataTable.rawTable)
});

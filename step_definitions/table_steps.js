const { Then } = require('cucumber')

Then('I should see {string} with below values:', async function (tableTitle, dataTable) {
  const readText = await title.readTextByCssSelector(scope.page, 'card-header .card-title')
  const values = await table.readReportTableValues(scope.page, 'multi-filter-select')
  assert.deepEqual(values, dataTable.rawTable)
});

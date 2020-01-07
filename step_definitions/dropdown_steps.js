 const { Then } = require('cucumber')

 Then('I should see dropdown menu with below options:', async function (dataTable) {
     let values = await dropdown.findUserMenuOptions(scope.page, 'dropdown-menu')
     return assert.deepEqual(values, dataTable.rawTable);
 })

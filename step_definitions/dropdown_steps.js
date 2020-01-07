 const { Then } = require('cucumber')
 
 Then('I should see dropdown menu with below options:', async function (dataTable) {
     let values = await dropdown.findDropDownFieldByCss(scope.page, 'dropdown-menu')
     console.log('values', values, dataTable.rawTable)
     
 })
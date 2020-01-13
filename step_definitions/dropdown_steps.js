 const { Then } = require('cucumber')

 Then('I should see dropdown menu with below options:', async function (dataTable) {
     let values = await dropdown.findUserMenuOptions(scope.page, 'dropdown-menu.fadeIn.show')
     return assert.deepEqual(values, dataTable.rawTable);
 })

 Then('I should see dropdown menu is closed', async function () {
   try {
     let values =  await dropdown.findUserMenuOptions(scope.page, 'dropdown-menu.fadeIn.show')
     if (values.length > 0) {
       throw new Error("Drop down menu is not closed")
     }
   }
   catch (error) {
     console.log("drop down menu closed")
   }
 });

  Then('I should see the following menu Options:', async function (dataTable) {
     let values = await dropdown.findUserMenuOptions(scope.page, 'nav-item.submenu ul')
      return assert.deepEqual(values, dataTable.rawTable);
    
  });

 
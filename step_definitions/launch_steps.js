const {
  Given,
  Then
} = require("cucumber")

Given("I launch corparation fine Applciation", async function() {
  try {
    await scope.page.goto(constants.baseUrl, {
      waitUntil: ["load", "networkidle0", "domcontentloaded"]
    })
    await wait.elementVisible(scope.page, '[name="email"]')
    console.log("element visible")
  } catch (error) {
    console.log("element not visible")
  }
})

Then("I should see the login page", async function() {
  await wait.elementVisible(scope.page, '[name="email"]')
  await wait.elementVisible(scope.page, '[name="password"]')
})

Then("I should see {string} message", function(errorMsg) {
  return span.readText(scope.page, errorMsg)
})

Then("I should see the Dashboard icon", async function() {
  await wait.elementVisible(scope.page, '[name="logoimg"]')
})

Then("I should see the {string} as message", async function(welcomeMsg) {
  await span.readText(scope.page, welcomeMsg)
})

Then("I should see dropdown menu with {string} as profilename", async function(profileName) {
  await span.readText(scope.page, profileName)
})

Then('I should see the following menu option on the left had side:', async function(dataTable) {
  let values = await dropdown.findMainMenuOptions(scope.page, 'nav-primary')
  return assert.deepEqual(values, dataTable.rawTable);
});

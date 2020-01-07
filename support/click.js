
async function clickByText(page, buttonText) {
  const element = await find.findButtonFieldContainText(page, buttonText)
  await element.focus()

  await Promise.all([
    element.click(),
    page.waitForNavigation({
      waitUntil: "networkidle0",
      timeout: 60000
    })
  ])
}

async function clickByAnchortext(page, anchorText) {
  const element = await find.findAnchorFieldContainText(page, anchorText)
  await element.focus()
  await Promise.all([
    element.click(), //TODO:- Application defect, it should work on single click.
    element.click()
  ])

  await delay(5000)
}

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  })
}

module.exports = {
  clickByText,
  clickByAnchortext
}

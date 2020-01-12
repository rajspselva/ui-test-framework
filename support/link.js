async function clickLinkByText(page, linkText) {

  const element = await find.findAnchorFieldContainText(page, linkText)
  await element.focus()

  await Promise.all([
    element.click(),
    page.waitForNavigation({
      waitUntil: "networkidle0",
      timeout: 60000
    })
  ])

}

module.exports = {
  clickLinkByText
}

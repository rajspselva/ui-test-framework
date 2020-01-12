
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

async function clickByAnchortext(page, anchorText, doubleClick) {
  const element = await find.findAnchorFieldContainText(page, anchorText)
  await element.focus()

  if (doubleClick) {
    await Promise.all([
      element.click(), //TODO:- Application defect, it should work on single click.
      element.click()
    ])
  } else {
    await element.click()
  }

  await delay(4000);
}

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  })
}

async function clickByCssSelectorAndText(page, linkText, cssSelector, waitForNavigation) {
    const element = await find.findElementsByCssSelectorAndText(page, cssSelector, linkText)

    if (waitForNavigation) {
      await Promise.all([
        element.click(),
        page.waitForNavigation({
          waitUntil: "networkidle0",
          timeout: 60000
        })
      ])
    } else {
      await element.click()
    }
    
    await delay(4000);
 
}

module.exports = {
  clickByText,
  clickByAnchortext,
  clickByCssSelectorAndText
}

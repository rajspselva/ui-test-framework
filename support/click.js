const find = require("./find");

async function clickByText(page, buttonText) {
  const element = await find.findButtonFieldContainText(page, buttonText);
  await element.focus();

  await Promise.all([
    element.click(),
    page.waitForNavigation({waitUntil: "networkidle0"})
  ]);
}

async function clickByAnchortext(page, anchorText) {
  const element = await find.findAnchorFieldContainText(page, anchorText);
  console.log('element', element);
  await element.focus()
  await Promise.all([
    element.click(),
    page.waitForNavigation()
  ]);
}

module.exports = {
  clickByText,
  clickByAnchortext
};

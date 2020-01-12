
async function readH2Title(page, title) {
    const element = await find.fineH2FieldContainText(page, title)
    compareResult(page, element, title)
}

async function readH5Title(page, title) {
    const element = await find.fineH5FieldContainText(page, title)
    compareResult(page, element, title)
}

async function readH4Title(page, title) {
    const element = await find.fineH5FieldContainText(page, title)
    compareResult(page, element, title)
}

async function readElementTitleByCssSelector(page, cssSelecctor, inputType, title) {
  const elements = await find.findElementsByCssSelector(page, cssSelecctor)

  let elemetMatched = null;
  for (let element of elements) {
      let lableText = await page.evaluate(
          el => el.innerText.trim(), element
      )
      if (title === lableText) {
        elemetMatched = element
      }
  }

  if (elemetMatched == null) {
    throw new Error(`Unable to find any values : ${title}`)
  }
}

async function readLabelText(page, labelText) {
    return await find.findFieldByType(page, 'label', labelText)
}

async function readTextByCssSelector(page, cssSelecctor) {
    const elements = await find.findElementsByCssSelector(page, cssSelecctor)
    let elementText = await page.evaluate(
        el => el.innerText.trim(), elements[0]
    )
    return elementText
}

async function compareResult(page, element, title) {
    let elementText = await page.evaluate(
        el => el.innerText.trim(), element
    )
    return title === elementText
}

module.exports = {
    readH2Title,
    readH4Title,
    readH5Title,
    readElementTitleByCssSelector,
    readLabelText,
    readTextByCssSelector
}

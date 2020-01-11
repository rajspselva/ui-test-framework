
async function findInputFieldWithLabel(page, labelText) {

    let elemetMatched = await findFieldByType(page, 'label', labelText)

    const labelElement = await page.evaluate(
        el => el.getAttribute('for'), elemetMatched
    )

    return await page.$(`input[id=${labelElement}`)
}

async function findFieldById(page, elementId) {
  return await page.$(`table[id=${elementId}`)
}

async function findTableValues(page, tableElementId) {

  const tableElement = await findFieldById(page, tableElementId)
  if (tableElement == null) {
      throw new Error(`Unable to find an element : ${tableElementId}`)
  }

  let tableRowValues = []
  const tableHeaderRows = await tableElement.$$('thead tr')
  tableRowValues = await readTableRows(page, tableHeaderRows, tableRowValues)
  const tableBodyRows = await tableElement.$$('tbody tr')
  tableRowValues = await readTableRows(page, tableBodyRows, tableRowValues)
  return tableRowValues
}

async function readTableRows(page, actualTableRows, tableRowValues) {

  for (let tableRowValue of actualTableRows) {
    let tableColumns = await tableRowValue.$$('th')
    if (tableColumns == null || tableColumns.length == 0) {
      tableColumns = await tableRowValue.$$('td')
    }

    let col = []
    for(let tableColumn of tableColumns) {
      const columnText = await page.evaluate(
          el => el.innerText.trim(), tableColumn
      )
      col.push(columnText)
    }
    tableRowValues.push(col)
  }

  return tableRowValues
}

async function findButtonFieldContainText(page, buttonText) {
    return await findFieldByType(page, 'button', buttonText)
}

async function findAnchorFieldContainText(page, anchorText) {
    return await findFieldByType(page, 'a', anchorText)
}

async function findSpanFieldContainText(page, spanText) {
    return await findFieldByType(page, 'span', spanText)
}

async function fineH2FieldContainText(page, h2TitleText) {
    return await findFieldByType(page, 'h2', h2TitleText)
}

async function fineH5FieldContainText(page, h2TitleText) {
    return await findFieldByType(page, 'h5', h2TitleText)
}

async function fineH4FieldContainText(page, h2TitleText) {
    return await findFieldByType(page, 'h4', h2TitleText)
}

async function findFieldByType(page, inputType, fieldText) {

    let matchingElements = await page.$$(inputType)
    let elemetMatched = null

    for (let element of matchingElements) {
        let lableText = await page.evaluate(
            el => el.innerText.trim(), element
        )

        if (lableText === fieldText) {
            elemetMatched = element
        }
    }

    if (elemetMatched == null) {
        throw new Error(`Unable to find an element : ${fieldText}`)
    }

    return elemetMatched
}

async function findAllSiblingElementValuesByType(page, elements, inputType) {

    let matchingElements = await elements[0].$$(inputType)
    let values = []
    for (let element of matchingElements) {
        let lableText = await page.evaluate(
            el => el.innerText.trim(), element
        )
        values.push(lableText)
    }

    if (values.length == 0) {
        throw new Error(`Unable to find any values : ${inputType}`)
    }

    return values
}

async function findAllSibilingElementValuesByCssSelector(page, elements, cssSelecctor) {

    let matchingElements = await elements[0].$$(`.${cssSelecctor}`)
    let values = []
    for (let element of matchingElements) {
        let lableText = await page.evaluate(
            el => el.innerText.trim(), element
        )
        values.push(lableText)
    }

    if (values.length == 0) {
        throw new Error(`Unable to find any values : ${inputType}`)
    }

    return values
}

async function findAllElementsValues(page, elements) {

    let values = []
    for (let element of elements) {
        let lableText = await page.evaluate(
            el => el.innerText.trim(), element
        )
        values.push(lableText)
    }

    if (values.length == 0) {
        throw new Error(`Unable to find any values : ${inputType}`)
    }

    return values
}

async function findElementsByCssSelector(page, cssSelecctor) {
    return await page.$$(`.${cssSelecctor}`)
}

async function findElementsByCssSelectorAndText(page, cssSelecctor, fieldText) {
    const matchingElements = await page.$$(`.${cssSelecctor}`)

    let elemetMatched = null;

    for (let element of matchingElements) {
        let lableText = await page.evaluate(
            el => el.innerText.trim(), element
        )

        if (lableText === fieldText) {
            elemetMatched = element
        }
    }

    if (elemetMatched == null) {
        throw new Error(`Unable to find an element : ${fieldText}`)
    }

    return elemetMatched
}

async function findInputFieldByPlaceHolderValue(page, placeholderText) {
  let matchingElements = await page.$$('input')
  let elemetMatched = null

  for (let element of matchingElements) {
      let placeholder = await page.evaluate(
          el => el.placeholder.trim(), element
      )

      if (placeholder === placeholderText) {
          elemetMatched = element
      }
  }

  if (elemetMatched == null) {
      throw new Error(`Unable to find an element : ${fieldText}`)
  }

  return elemetMatched
}

module.exports = {
    findFieldByType,
    findInputFieldWithLabel,
    findButtonFieldContainText,
    findSpanFieldContainText,
    fineH2FieldContainText,
    fineH4FieldContainText,
    fineH5FieldContainText,
    findAnchorFieldContainText,
    findElementsByCssSelector,
    findAllSiblingElementValuesByType,
    findAllSibilingElementValuesByCssSelector,
    findAllElementsValues,
    findInputFieldByPlaceHolderValue,
    findFieldById,
    findTableValues,
    readTableRows,
    findElementsByCssSelectorAndText
}

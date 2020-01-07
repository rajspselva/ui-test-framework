
async function findInputFieldWithLabel(page, labelText) {
    
    let elemetMatched = await findFieldByType(page, 'label', labelText)
   
    const labelElement = await page.evaluate(
        el => el.getAttribute('for'), elemetMatched
    )
    
    return await page.$(`input[id=${labelElement}`)
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

async function findAllElementValuesByType(page, element, inputType) {

    let matchingElements = await element[0].$$(inputType)
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

async function findElementByCssSelector(page, cssSelecctor) {
    return await page.$$(`.${cssSelecctor}`)
}

module.exports = {
    findFieldByType,
    findInputFieldWithLabel,
    findButtonFieldContainText,
    findSpanFieldContainText,
    fineH2FieldContainText,
    findAnchorFieldContainText,
    fineH5FieldContainText,
    findElementByCssSelector,
    findAllElementValuesByType
}
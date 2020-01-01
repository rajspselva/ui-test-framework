
async function findInputFieldWithLabel(page, labelText) {
    
    let elemetMatched = await findFieldByType(page, 'label', labelText);
   
    const labelElement = await page.evaluate(
        el => el.getAttribute('for'), elemetMatched
    )
    
    return await page.$(`input[id=${labelElement}`);
}

async function findButtonFieldContainText(page, buttonText) {
    return await findFieldByType(page, 'button', buttonText);
}

async function findSpanFieldContainText(page, spanText) {
    return await findFieldByType(page, 'span', spanText);
}

async function findFieldByType(page, inputType, fieldText) {

    let matchingElements = await page.$$(inputType)
    let elemetMatched = null;

    for (let element of matchingElements) {
        let lableText = await page.evaluate(
            el => el.innerText.trim(), element
        )
        if (lableText === fieldText) {
            elemetMatched = element;
        }
    }

    if (elemetMatched == null) {
        throw new Error(`Unable to find an element : ${fieldText}`);
    }

    return elemetMatched;
}

module.exports = {
    findFieldByType,
    findInputFieldWithLabel,
    findButtonFieldContainText,
    findSpanFieldContainText
}

async function readH2Title(page, title) {
    const element = await find.fineH2FieldContainText(page, title)
    compareResult(page, element, title)
}

async function readH5Title(page, title) {
    const element = await find.fineH5FieldContainText(page, title)
    compareResult(page, element, title)
}

async function compareResult(page, element, title) {
    let elementText = await page.evaluate(
        el => el.innerText.trim(), element
    )
    return title === elementText
}

module.exports = {
    readH2Title,
    readH5Title
}
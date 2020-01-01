const find = require('./find')

async function readText(page, spanText) {
    const field = await find.findSpanFieldContainText(page, spanText);
    let elementText = await page.evaluate(
        el => el.innerText.trim(), field
    )
    return spanText === elementText
}

module.exports = {
    readText
}
const find = require('./find')

async function clickByText(page, buttonText) {
    const element = await find.findButtonFieldContainText(page, buttonText);
    await element.focus();

    await Promise.all([
        element.click(),
        page.waitForNavigation({
            waitUntil: 'networkidle0'
        }),
    ])
} 

module.exports = {
    clickByText
}
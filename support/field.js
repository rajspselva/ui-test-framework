
async function sendText(page, labelText, inputValue) {
    const field = await find.findInputFieldWithLabel(page, labelText)
    await field.focus()
    await field.type(inputValue)
}

async function findInputFieldPlaceHolderByName(page, placeholderText) {
    return await find.findInputFieldByPlaceHolderValue(page, placeholderText)
}

module.exports = {
    sendText,
    findInputFieldPlaceHolderByName
}

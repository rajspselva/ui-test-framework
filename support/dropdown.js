
async function findUserMenuOptions(page, cssSelector) {
    const options = await find.findElementsByCssSelector(page, cssSelector)
    const values =  await find.findAllElementValuesByType(page, options, 'li')
    return await extractOptionValues(values)
}


async function findMainMenuOptions(page, cssSelector) {
    const options = await find.findElementsByCssSelector(page, cssSelector)
    const values =  await find.findAllElementValuesByCssSelector(page, options, 'nav-item')
    return await extractOptionValues(values)
}

async function extractOptionValues(values) {

    let newValues = []
     values.forEach(element => {
         let temp = element.split("\n\n")
         if (temp.length == 1) {
            newValues.push([element])
         } else {
             temp.forEach(value => {
                 newValues.push([value])
             })
         }
     })

     return newValues
}

module.exports = {
    findUserMenuOptions,
    findMainMenuOptions
}

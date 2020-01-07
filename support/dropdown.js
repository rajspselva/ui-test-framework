
async function findDropDownFieldByCss(page, cssSelector) {
    const element = await find.findElementByCssSelector(page, cssSelector)
    return await findDropDownOptions(page, element)
}

async function findDropDownOptions(page, dropDown) {
    
    const values =  await find.findAllElementValuesByType(page, dropDown, 'li')

    let newValues = []
     values.forEach(element => {
         let temp = element.split("\n\n")
         if (temp.length == 1) {
            newValues.push(element)
         } else {
             temp.forEach(value => {
                 newValues.push(value)
             })
         }
     })

     let rows = []
     rows.push(newValues)
     return rows
     
}

module.exports = {
    findDropDownFieldByCss
}
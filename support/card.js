async function findFineAmountCards() {
  const elements = await find.findElementsByCssSelector(scope.page, 'card.fine-card')
  const values = await find.findAllElementsValues(scope.page, elements)
  return await processCardValues(values)
}

async function findUserCollectionCard(){
  const roots = await find.findElementsByCssSelector(scope.page,'card-list')
  const elements = await find.findElementsByCssSelector(roots[0], 'd-flex')
  const values = await find.findAllElementsValues(scope.page, elements)
  return await processCardValues(values)  
}

async function processCardValues(values) {
  let rows = [];
  values.forEach(value => {
    let temp = value.split("\n");
      let columns = []
      temp.forEach(column => {
        if (column.trim() !== "") {
          columns.push(column.trim())
        }
      })
      rows.push(columns)
  })
  return rows
}

module.exports = {
  findFineAmountCards,
  findUserCollectionCard
}

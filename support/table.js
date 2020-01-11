async function readReportTableValues(page, elementId) {
    return await find.findTableValues(page, elementId)
}

module.exports = {
  readReportTableValues
}

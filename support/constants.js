let config = require('konfig')({
  path: './config'
})

module.exports = {
  baseUrl: config.properties.baseUrl
}

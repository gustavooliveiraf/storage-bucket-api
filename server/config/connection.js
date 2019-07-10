const { Storage } = require('@google-cloud/storage')

const storage = new Storage({
  keyFilename: './credentials.json'
})

module.exports = storage

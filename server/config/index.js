const Storage = require('./connection')

module.exports = {
  port: process.env.PORT,
  envDevelopment: process.env.NODE_ENV === 'development' ? true : false,
  storage: Storage
}

const cors = require('cors')
const { envDevelopment } = require('../config')

module.exports = (app) => {
  app.use(cors())
  if (envDevelopment) app.use(require('morgan')('dev'))
}

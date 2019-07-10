const bucketRoute = require('./bucket')
const statusServerRoute = require('./statusServer')

module.exports = (app) => {
  app.use(bucketRoute)
  app.use(statusServerRoute)
}

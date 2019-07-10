const app = require('express')()
const port = require('./server/config').port
const middlewares = require('server/middlewares/middlewares')
const routes = require('server/routes')

middlewares(app)
routes(app)

app.listen(port)

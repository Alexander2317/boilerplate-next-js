import next from 'next'
import express from 'express'
import compression from 'compression'
import routes from '../routes'

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)

const PORT = process.env.PORT || 3000

app.prepare().then((pro) => {
  express()
    .use(express.static('static'))
    .use(compression())
    .use(handler)
    .listen(PORT)
})

// @flow

import next from 'next'
import express from 'express'
import compression from 'compression'

import routes from '../routes'

const isDev = process.env.NODE_ENV !== 'production'
const app = next({ dev: isDev })
const handler = routes.getRequestHandler(app)

const PORT = process.env.PORT || 3000

app.prepare().then(() => {
  express()
    .use(express.static('static'))
    .use(compression())
    .use(handler)
    .listen(PORT, () =>
      console.info(
        `> Project ready${isDev ? ` on http://localhost:${PORT}` : ''}`,
      ),
    )
})

import next from 'next';
import express from 'express';
import cookiesMiddleware from 'universal-cookie-express';
import compression from 'compression';
import routes from '../routes';

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  express()
    .use(express.static('static'))
    .use(cookiesMiddleware())
    .use(compression())
    .use(handler)
    .listen(3000);
});

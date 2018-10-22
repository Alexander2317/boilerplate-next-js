import next from 'next';
import cookiesMiddleware from 'universal-cookie-express';
import compression from 'compression';
import routes from '../routes';
import express from 'express';

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  express()
    .use(cookiesMiddleware())
    .use(compression())
    .use(handler)
    .listen(3000);
});

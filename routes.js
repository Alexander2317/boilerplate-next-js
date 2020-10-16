/* eslint-disable import/prefer-default-export */
/* eslint-disable no-multi-assign */
const routes = (module.exports = require('next-routes')())

routes.add('posts', '/posts/:id')

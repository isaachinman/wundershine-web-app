const compression = require('compression')
const express = require('express')
const path = require('path')
const next = require('next')
const { parse } = require('url')
const i18nMiddleware = require('i18next-express-middleware')
const i18nClient = require('./utils/i18n/i18n-client')
const lngPathDetector = require('./utils/i18n/lng-path-detector')
const forceTrailingSlash = require('./utils/i18n/force-trailing-slash')

const config = require('./config')

const app = next({
  dev: process.env.NODE_ENV !== 'production',
  dir: './src',
  port: config.port,
})

const handle = app.getRequestHandler()

const {
  allLanguages,
  localeSubpaths,
} = config.translation;

(async () => {
  await app.prepare()
  const server = express()

  server.use(compression())
  server.use((req, res, cb) => {
    res.removeHeader('x-powered-by')
    cb()
  })

  // Enable middleware for i18next
  server.use(i18nMiddleware.handle(i18nClient))

  if (localeSubpaths) {
    server.get('*', forceTrailingSlash)
    server.get(/^\/(?!_next|static).*$/, lngPathDetector)
    server.get(`/:lng(${allLanguages.join('|')})/*`, (req, res) => {
      const { lng } = req.params
      app.render(req, res, req.url.replace(`/${lng}`, ''), { lng })
    })
  }

  // Serve static files
  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true)
    const rootStaticFiles = ['/robots.txt', '/sitemap.xml']
    if (rootStaticFiles.includes(parsedUrl.pathname)) {
      const staticPath = path.join(__dirname, 'static', parsedUrl.pathname)
      app.serveStatic(req, res, staticPath)
    } else {
      handle(req, res)
    }
  })

  await server.listen(config.port)
  console.log(`> Ready on port ${config.port}`) // eslint-disable-line no-console
})()

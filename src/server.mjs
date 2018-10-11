import compression from 'compression'
import express from 'express'
import path from 'path'
import next from 'next'
import url from 'url'
import i18nMiddleware from 'i18next-express-middleware'
import Backend from 'i18next-node-fs-backend'
import i18nClient from './utils/i18n/i18n-client'

import config from './config'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const app = next({
  dev: process.env.NODE_ENV !== 'production',
  dir: './src',
  port: config.port,
})

const handle = app.getRequestHandler()

const {
  allLanguages,
  defaultLanguage,
  namespaces,
} = config.translation

i18nClient
  .use(Backend)
  .use(i18nMiddleware.LanguageDetector)
  .init(
    {
      detection: {
        order: ['path', 'session', 'querystring', 'cookie', 'header'],
        lookupPath: 'lng',
        lookupFromPathIndex: 0,
      },
      fallbackLng: defaultLanguage,
      preload: ['en'],
      whitelist: allLanguages,
      ns: namespaces,
      backend: {
        loadPath: path.join(__dirname, '../locales/{{lng}}/{{ns}}.json'),
        addPath: path.join(__dirname, '../locales/{{lng}}/{{ns}}.missing.json'),
      },
    },
    () => {

      app.prepare().then(() => {

        const server = express()
        server.use(compression())

        server.use((req, res, cb) => {
          res.removeHeader('x-powered-by')
          cb()
        })

        // Force trailing slash
        server.get('*', (req, res, cb) => {
          const { pathname, search } = url.parse(req.url)
          const searchString = search || ''
          for (const lng of allLanguages) {
            if (pathname.startsWith(`/${lng}`) && !pathname.startsWith(`/${lng}/`)) {
              req.url = pathname.replace(`/${lng}`, `/${lng}/`) + searchString
              app.render(req, res)
              // res.redirect(301, pathname.replace(`/${lng}`, `/${lng}/`) + searchString)
              break
            }
          }
          cb()
        })

        // Enable middleware for i18next
        server.use(i18nMiddleware.handle(i18nClient))

        // Serve locales for client
        server.use('/locales', express.static(path.join(__dirname, '../locales')))
        server.post('/locales/add/:lng/:ns', i18nMiddleware.missingKeyHandler(i18nClient))

        // Use NextJs
        server.get('*', (req, res) => {
          // If req.url contains a language subpath, remove
          // it so that NextJS will render the correct page
          let strippedRoute = req.url
          for (const lng of allLanguages) {
            if (req.url.startsWith(`/${lng}/`)) {
              strippedRoute = strippedRoute.replace(`/${lng}/`, '/')
              break
            }
          }
          if (strippedRoute !== req.url) {
            app.render(req, res, strippedRoute)
          } else {
            handle(req, res)
          }
        })

        server.listen(config.port, (err) => {
          if (err) throw err
          console.log(`> Ready on port ${config.port}`) // eslint-disable-line no-console
        })
      })
    },
  )

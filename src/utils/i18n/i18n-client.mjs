import i18next from 'i18next'
import i18nXHRBackend from 'i18next-xhr-backend'
import i18nLanguageDetector from 'i18next-browser-languagedetector'

import config from '../../config'

const i18n = i18next.default ? i18next.default : i18next

const options = {
  fallbackLng: config.translation.defaultLanguage,
  load: 'languageOnly', // we only provide en, de -> no region specific locals like en-US, de-DE

  // have a common namespace used around the full app
  ns: ['common'],
  defaultNS: 'common',

  debug: false, // process.env.NODE_ENV !== 'production',
  saveMissing: false,

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
    format: (value, format) => {
      if (format === 'uppercase') return value.toUpperCase()
      return value
    },
  },
}

// for browser use xhr backend to load translations and browser lng detector
if (process.browser) {
  i18n
    .use(i18nXHRBackend)
    // .use(Cache)
    .use(i18nLanguageDetector)
}

// initialize if not already initialized
if (!i18n.isInitialized) {
  i18n.init(options)
}

// a simple helper to getInitialProps passed on loaded i18n data
i18n.getInitialProps = (req, namespaces) => {

  if (typeof namespaces === 'string') {
    namespaces = [namespaces]
  }

  if (!namespaces) {
    namespaces = i18n.options.defaultNS
  }

  if (!namespaces.includes(i18n.options.defaultNS)) {
    namespaces.push(i18n.options.defaultNS)
  }

  // do not serialize i18next instance avoid sending it to client
  if (req) req.i18n.toJSON = () => null

  const ret = {
    i18n: req ? req.i18n : i18n, // use the instance on req - fixed language on request (avoid issues in race conditions with lngs of different users)
  }

  // for serverside pass down initial translations
  if (req) {
    const initialI18nStore = {}
    req.i18n.languages.forEach((l) => {
      initialI18nStore[l] = {}
      namespaces.forEach((ns) => {
        initialI18nStore[l][ns] = (req.i18n.services.resourceStore.data[l] || {})[ns] || {}
      })
    })

    ret.initialI18nStore = initialI18nStore
    ret.initialLanguage = req.i18n.language
  }

  return ret
}

export default i18n

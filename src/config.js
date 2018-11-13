/* User Settings - feel free to change */
const PORT = process.env.PORT || 3000
const DEFAULT_LANGUAGE = 'en'
const OTHER_LANGUAGES = ['nl']
const DEFAULT_NAMESPACE = 'common'
const LOCALE_PATH = 'static/locales'
const LOCALE_STRUCTURE = '{{lng}}/{{ns}}'
const LOCALE_SUBPATHS = true

/* Core Settings - only change if you understand what you're changing */
const config = {

  port: PORT,

  favicon: 'https://res.cloudinary.com/wundershine/image/upload/q_100/v1539272013/wundershine-web-app/wundershine-logo-graphic.png',

  googleAnalytics: {
    trackingID: 'UA-127356839-1',
  },

  intercom: {
    appID: 'pmje77sj',
  },

  translation: {
    allLanguages: OTHER_LANGUAGES.concat([DEFAULT_LANGUAGE]),
    defaultLanguage: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    load: 'languageOnly',
    localesPath: `./${LOCALE_PATH}/`,
    localeSubpaths: LOCALE_SUBPATHS,
    ns: [DEFAULT_NAMESPACE],
    defaultNS: DEFAULT_NAMESPACE,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
      format: (value, format) => (format === 'uppercase' ? value.toUpperCase() : value),
    },
    detection: {
      order: ['cookie', 'header', 'querystring'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: `/${LOCALE_PATH}/${LOCALE_STRUCTURE}.json`,
      addPath: `/${LOCALE_PATH}/${LOCALE_STRUCTURE}.missing.json`,
    },
  },
}

/* SSR Settings - only change if you understand what you're changing */
if (!process.browser) {
  const fs = require('fs') // eslint-disable-line global-require

  const getAllNamespaces = p => fs.readdirSync(p).map(file => file.replace('.json', ''))

  config.translation = {
    ...config.translation,
    preload: config.translation.allLanguages,
    ns: getAllNamespaces(`${process.cwd()}/src/${LOCALE_PATH}/${config.translation.defaultLanguage}`),
    backend: {
      loadPath: `${process.cwd()}/src/${LOCALE_PATH}/${LOCALE_STRUCTURE}.json`,
      addPath: `${process.cwd()}/src/${LOCALE_PATH}/${LOCALE_STRUCTURE}.missing.json`,
    },
  }
}

module.exports = config

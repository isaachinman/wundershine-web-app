const PORT = process.env.PORT || 3000
const DEFAULT_LANGUAGE = 'en'
const OTHER_LANGUAGES = ['nl']
const DEFAULT_NAMESPACE = 'common'
const LOCALE_PATH = 'static/locales'
const LOCALE_STRUCTURE = '{{lng}}/{{ns}}'
const LOCALE_SUBPATHS = true

const config = {

  port: PORT,

  favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC/UlEQVR4nOXWTYiWVRQH8N+8E4ZlptRQyRAZElIZNFAWRWJ+ZYsiJIoisCxoFmEEfWzcCFGrLCTbZBF9bKQgciGDRYVhIhVZtChr+m4iWgilEQ2Pi3suzzNv78edcXLTH17ue+89/3POPffc8xz+7xjosj4XN2EdRrAAg/gG+/EaDrVxrsDtuBqLcSom8Bnewus4VuLQKH5B1ef3Bi7ARRgrkJ/Axl4RmBMn2xDzI9iFd/FzROCSiMzK4B6NcW4Y2R2nHY+987ECt+Ks0PsSNmGy3ZlXGt4+K4W9G5bj64b8IVzeQ34+tjXkd7YL3NbYHO2hqKnwt5D/AGcWcODehp0782JLfZodhYq2hPyvOKeQk/F0cL+Xrt0NsXAEZxQoGMQPwbl/msZJ0fs9+LfA9pg8V6jgmpD/A6fPwAFSjlXY2ZLeL+wtJK+K8RP8OUMHxmIcaeHCmPxYSF4W47XYg8tm4MDhGM9r4ZSYDBaSFzf+r8NH2DoNPpF8GGhJ2UgdiX7Iifoo3pYOsEUKa+lzzIeYaEkngLWF5Fw9x7Aa9+EvXI99GCrQkW19COuljDxWSP445Fc11kbVBeYgTuvBP1t6QVXYNoBPY+HlAgd2h+zdMR/x74/Xiz34r4bM51IRRPqETsbGI30cyHXjGakQHY354eBmJ27swH2gsb+yffPBxubDPRzYFDKTDfn9ODf2n4+1L9QvjFT7M2drN+WPN5RuUyfcIC7FZvV1VfgHT0rNR8aQ+o7vaBwuG39B90YIPNYw8KX0bf/b1Duu8Ka6KLUjl9p9eMrU3CiqF5s7GKyk9uoJLO3Dv7IDd7s+J2/HXeqwjWN4Gtx5Um3IxrveeT/crA7/+8oq3Xy80zD+0EyNZ6xVP7UD6t6uExaGTH4l95yo8YzrpIYl50GnijkUe5UUtQ0dZE4Iy9WdzFem5sRwrFVStNbMtvGMZepmdBxL4veduq276r8ynnGx1LxUMf6kblC71YVZx5KGExW+jbWTimG8Jz3PRSfb+KzhOPW48FpAYyW0AAAAAElFTkSuQmCC',

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

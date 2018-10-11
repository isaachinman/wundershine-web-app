module.exports = {

  port: parseInt(process.env.PORT, 10) || 3000,

  translation: {
    defaultLanguage: 'en',
    allLanguages: ['en', 'nl'],
    namespaces: [
      'common',
      'home',
      'native-app',
      'creative',
      'about',
    ],
  },

  googleAnalytics: {
    trackingID: 'UA-127356839-1',
  },

}

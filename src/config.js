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

  favicon: 'https://res.cloudinary.com/wundershine/image/upload/q_100/v1539272013/wundershine-web-app/wundershine-logo-graphic.png',

  googleAnalytics: {
    trackingID: 'UA-127356839-1',
  },

  intercom: {
    appID: 'pmje77sj',
  },

}

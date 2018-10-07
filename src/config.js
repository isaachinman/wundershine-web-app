module.exports = {
  port: parseInt(process.env.PORT, 10) || 3000,
  translation: {
    defaultLanguage: 'en',
    allLanguages: ['en', 'de'],
    namespaces: [
      'common',
      'home',
      'native-app',
      'creative',
      'about',
    ],
  },
}

const withCSS = require('@zeit/next-css')
const config = withCSS()

config.poweredByHeader = false
config.distDir = '../dist'

module.exports = config

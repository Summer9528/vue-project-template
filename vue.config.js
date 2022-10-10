'use strict'
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  lintOnSave: IS_PROD
}

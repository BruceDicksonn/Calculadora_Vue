const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
  ? '/My_Calculator_Vue/'
  : '/',
  transpileDependencies: true
})

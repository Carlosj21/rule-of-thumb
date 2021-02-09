const path = require('path');

module.exports = {
  chainWebpack(config) {
    config.entry('app')
      .clear()
      .add('./src/main.js')
      .end();
    config.resolve.alias.set('@', path.join(__dirname, './src'));
    config.resolve.alias.set('@store', path.join(__dirname, './store'));
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          indentedSyntax: true,
        },
        additionalData: '@import "@/assets/scss/main.scss"',
      },
    },
  },
  assetsDir: '@/assets/',
  devServer: {
    disableHostCheck: true,
  },
  transpileDependencies: [
    'vuetify',
  ],
};

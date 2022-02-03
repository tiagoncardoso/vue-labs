const path = require('path');

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}

module.exports = {
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        assets: resolveSrc('src/assets')
      }
    }
  },
  css: {
    sourceMap: process.env.NODE_ENV !== 'production'
  },
  transpileDependencies: [
    'vuetify'
  ]
}

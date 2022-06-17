const pxtoviewport = require('postcss-px-to-viewport')

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          pxtoviewport({
            viewportWidth: 375
          })
        ]
      }
    }
  }
}

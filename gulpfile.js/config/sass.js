var config = require('./')

module.exports = {
  autoprefixer: { browsers: ['last 2 version'] },
  src: config.sourceAssets + "/stylesheets/**/*.{sass,scss}",
  dest: config.publicAssets + '/stylesheets',
  settings: {
    imagePath: 'images' // Used by the image-url helper
  }
}

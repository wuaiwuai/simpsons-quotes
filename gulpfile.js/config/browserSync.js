var config = require('./')

module.exports = {
  server: {
    baseDir: config.publicDirectory
  },
  open: false,
  files: ['public/**/*.html']
}

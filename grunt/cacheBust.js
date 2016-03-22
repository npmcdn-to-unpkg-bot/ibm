module.exports = {
  options: {
    assets: [
      '**/*.{js,css,png,jpg,gif,svg}',
      '!**/app.min.js'
    ],
    baseDir: "deploy/menus/",
    encoding: 'utf8',
    algorithm: 'md5',
    length: 16,
    deleteOriginals: true
  },
  assets: {
    files: [{
      expand: true,
      cwd: 'deploy/menus/',
      src: ['**/*.{html,css,js}']
    }]
  }
}

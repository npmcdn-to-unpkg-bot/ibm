module.exports = {
  devMode: {
    files: [{
          expand: true,
          cwd: '<%= build_dir %>assets/js',
          src: ['**/*.js', '!app.min.js'],
          dest: '<%= build_dir %>assets/js',
      }]
    }
}

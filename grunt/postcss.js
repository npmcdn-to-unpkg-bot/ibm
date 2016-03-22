module.exports = {
  options: {
    processors: [
      require('pixrem'),
      require('autoprefixer') ({browsers: 'last 3 version'}),
      require('csswring') ({ removeAllComments: true }),
      require('cssnano')
    ]
  },
  dist: { src: '<%= build_dir %>assets/css/*.css' }
}

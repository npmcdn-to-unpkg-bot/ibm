module.exports = {
  components: {
    files: [
      {
        expand: true,
        cwd: 'assets/js/components',
        src: ['**/*.jsx'],
        dest: '<%= react_build_dir %>components',
        ext: '.js'
      },
      {
        expand: true,
        cwd: 'assets/js/pages',
        src: ['**/*.jsx'],
        dest: '<%= react_build_dir %>pages',
        ext: '.js'
      }
    ]
  }
}

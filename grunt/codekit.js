module.exports = {
  files: {
    cwd: '_kits',
    dest: '<%= build_dir %>',
    expand: true,
    ext: '.html',
    src: ['**/*.kit', '!includes/**', '!**/includes/**']
  }
}

module.exports = {
  codekit: {
    files: ['_kits/**/*.kit'],
    tasks: ['codekit']//, 'notify:codekit']
  },
  less: {
    files: ['assets/less/**/*.less'],
    tasks: ['newer:less']
  },
  react: {
    files: ['assets/js/components/**/*.jsx', 'assets/js/pages/*.jsx'],
    tasks: ['newer:react', 'requirejs:dev']
  },
  requirejs: {
    files: [ 'assets/js/app.js', 'assets/js/apis/*.js', 'assets/js/utility/*.js' ],
    tasks: [ 'requirejs:dev' ]
  },
  configFiles: {
    files: [ 'gruntfile.js', 'grunt/*.js' ],
    options: {
      reload: true
    }
  }
}

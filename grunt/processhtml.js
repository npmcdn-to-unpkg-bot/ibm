module.exports = {
  options: {
    // Task-specific options go here.
    strip: true,
    data: { rlsdate: '<%= grunt.template.today("yyyymmddhms") %>' }
  },
  dev: {
    files: { 'public_html/menus/index.html': ['public_html/menus/index.html'] }
  },
  prod: { // Target-specific file lists and/or options go here.
    files: { 'public_html/menus/index.html': ['public_html/menus/index.html'] }
  }
}

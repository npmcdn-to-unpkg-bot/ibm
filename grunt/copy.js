module.exports = {

  // Deploy just copys the sanitized --prod build to a new directory
  deploy: {
    expand: true,
    cwd: 'public_html',
    dest: "deploy",
    src: ["**/*"]
  },

  dev: {
    files: [
      // // Fonts
      // {
      //   expand: true,
      //   cwd: 'assets/common/bower_components/fontawesome/fonts',
      //   dest: "<%= build_dir %>assets/common/bower_components/fontawesome/fonts",
      //   src: ["**/*"]
      // },

      // Static JS and libs
      // { "<%= build_dir %>assets/js/require.config.js" : "assets/js/require.config.js" },
      { "<%= build_dir %>assets/js/require.js" : "<%=node_dir%>requirejs/require.js" },
      // { "<%= build_dir %>assets/js/material.js" : "<%=node_dir%>material-design-lite/material.js" },

      // Library CSS
      // { "<%= build_dir %>assets/css/material.css" : "<%=node_dir%>material-design-lite/material.min.css" },
    ]
  },

  prebuild: {
    files: [
      // { "<%=temp_dir%>animate.less" : "<%=node_dir%>animate.css/animate.css" },
    ]
  }

}

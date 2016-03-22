var config = {
  optimize: "none",
  preserveLicenseComments: false,
  keepBuildDir: true,
  skipDirOptimize: true,
  // dir: "<%=build_dir%>assets/js/",
  out: "<%=build_dir%>assets/js/app.min.js",
  name: "<%=require_dir%>app",
  // mainConfigFile: "assets/js/require.config.js",
  normalizeDirDefines: "skip",
  useStrict: true,
  paths: {

    // Libraries
    //-------------------------
    'async':'<%=node_dir%>requirejs-plugins/src/async',
    'classnames': '<%=node_dir%>classnames/index',
    'es6-shim': '<%=node_dir%>es6-shim/es6-shim',
    'eventEmitter': '<%=node_dir%>wolfy87-eventemitter/EventEmitter',
    'flux': '<%=node_dir%>flux/dist/Flux',
    'moment': '<%=node_dir%>moment/moment',
    'react-dom': '<%=node_dir%>react-dom/dist/react-dom',
    'react-router': '<%=temp_dir%>ReactRouter',
    'react': '<%=node_dir%>react/dist/react',


    // App Components
    //-------------------------
    components: '<%=react_build_dir%>components',
    pages: '<%=react_build_dir%>pages',
    utility: '<%=require_dir%>utility',

    // Flux
    //-------------------------
    actions: '<%=require_dir%>actions',
    apis: '<%=require_dir%>apis',
    constants: '<%=require_dir%>constants',
    dispatcher: '<%=require_dir%>dispatcher',
    stores: '<%=require_dir%>stores',

  },
  shim: {
    react: { deps: ['es6-shim', 'classnames'] },
    'react-dom': { deps: ['react']},
    'react-router': {
      exports: 'ReactRouter',
      deps: ['react']
    },
    ga: { deps: ['react']},
    classnames: { exports: 'classNames'},
    app: {
      deps: ['es6-shim']
    }
  },
};


module.exports = {
  dev: {
    options: {
      baseUrl: config.baseUrl,
      optimize: config.optimize,
      preserveLicenseComments: config.preserveLicenseComments,
      keepBuildDir: config.keepBuildDir,
      skipDirOptimize: config.skipDirOptimize,
      out: config.out,
      name: config.name,
      mainConfigFile: config.mainConfigFile,
      normalizeDirDefines: config.normalizeDirDefines,
      useStrict: config.useStrict,
      paths: config.paths,
      shim: config.shim,
    }
  },
  prod: {
    options: {
      baseUrl: config.baseUrl,
      optimize: "uglify2",
      preserveLicenseComments: config.preserveLicenseComments,
      keepBuildDir: config.keepBuildDir,
      skipDirOptimize: config.skipDirOptimize,
      out: config.out,
      name: config.name,
      mainConfigFile: config.mainConfigFile,
      normalizeDirDefines: config.normalizeDirDefines,
      useStrict: config.useStrict,
      paths: config.paths,
      shim: config.shim,
    }
  },
}

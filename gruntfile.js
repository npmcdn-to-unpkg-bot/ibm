/*global module:false*/

module.exports = function (grunt) {


  // Configure tasks
  //------------------------
  require('load-grunt-config') (grunt, {
    data: {
      base_dir: "public_html",
      build_dir: "public_html/",
      deploy_dir: "deploy/",
      node_dir: "node_modules/",
      react_build_dir: "temp/components/",
      require_dir: "assets/js/",
      temp_dir: "temp/",
    }
  });


  // Start BrowserSync via the API
  //------------------------
  var bs;

  grunt.registerTask("bs-start", function () {
    var browserSync = require("browser-sync");

    // resolve all 404s to index.html
    var historyAPI = require('connect-history-api-fallback')({
      index: '/menus/'
    });

    var done = this.async();
    var config = {
      minify: false,
      notify: false,
      open: false,
      port: 3000,
      server: {
        baseDir: "./public_html/",
        index: "index.html",
        middleware: [
          // Proxy the API
          historyAPI,
          function(req, res, next){
            // Kill bogus favicon requests
            if (req.url.slice(-11) === 'favicon.ico') {
                res.writeHead(200, {'Content-Type': 'image/x-icon'} );
                res.end(/* icon content here */);
            } else {
                next();
            };
          },
        ]
      },
      watchOptions: { debounceDelay: 10000 },
      watchTask: true
    };

    bs = browserSync.init([
        'public_html/assets/css/*.css',
        'public_html/assets/js/app.min.js',
        'public_html/**/*.html'
      ], config, function (err, bs) { done(); }
    );

  });


  // Load Tasks
  // NOTE: Set loaded tasks from package.json
  //-------------------------
  var pkg = grunt.file.readJSON('package.json'), taskName;
  for(taskName in pkg.devDependencies) { if (taskName.substring(0, 6) == 'grunt-') { grunt.loadNpmTasks(taskName); } }

  // Default Task
  //-------------------------
  var isProd = grunt.option('prod');
  var target = isProd ? 'prod' : 'dev';

  grunt.registerTask('default', ['bs-start', 'watch']);

  grunt.registerTask('buildJS', [ 'react', 'requirejs:' + target ]);

  grunt.registerTask('skip', function () {});

  grunt.registerTask('build', [
    (isProd ? 'clean' : 'skip'),
    'curl',
    'responsive_images',
    'copy:prebuild',
    'codekit',                // build static files
    'less',                   // compile and generate css
    'react',                  // compile react files
    'requirejs:' + target,    // compile components and generate app
    'copy:dev',               // Bring in other files
    'imagemin:' + target,
    'postcss', 'uglify',      // Optimize Assets
    'processhtml:' + target,  // cacheBust requireJS during production builds
    (isProd ? 'clean:temp' : 'skip'),
  ]);

  grunt.registerTask('deploy', 'Upload code to specified target.', function(n) {
    if (!isProd) { grunt.fail.warn("You can only run this targeting --prod"); }
    grunt.task.run([ 'clean:deploy', 'build', 'copy:deploy', 'cacheBust' ]);
  });
};

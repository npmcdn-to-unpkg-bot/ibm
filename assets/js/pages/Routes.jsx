define([
  'react', 'react-router',
  'pages/app', 'pages/Home', 'pages/NotFound',
  'utility/helpers'
], function (
  React, Router,
  App, Home, NotFound
) {

  return (
    <Router.Route name="app" path={"/"} handler={App}>
      <Router.Route handler={Home} />
      <Router.Route name="default" path="index.html" handler={Home} />
      <Router.Route name="404" path="*" handler={NotFound} />
    </Router.Route>
  );

});

define([
  'react', 'react-router',
  'pages/app', 'pages/NotFound',
  'pages/Home', 'pages/Recent', 'pages/Albums'
], function (
  React, Router,
  App, NotFound,
  Home,Recent,Albums
) {

  return (
    <Router.Route name="app" path={"/"} handler={App}>
      <Router.Route handler={Home} />
      <Router.Route name="home" path="index.html" handler={Home} />
      <Router.Route name="recent" path="recent/" handler={Recent} />
      <Router.Route name="albums" path="albums/" handler={Albums} />
      <Router.Route name="404" path="*" handler={NotFound} />
    </Router.Route>
  );

});

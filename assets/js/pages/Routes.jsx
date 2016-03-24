define([
  'react', 'react-router',
  'pages/app', 'pages/NotFound',
  'pages/Home', 'pages/About'
], function (
  React, Router,
  App, NotFound,
  Home, About
) {

  return (
    <Router.Route name="app" path={"/"} handler={App}>
      <Router.Route handler={Home} />
      <Router.Route name="home" path="/" handler={Home} />
      <Router.Route name="home-full" path="/index.html" handler={Home} />
      <Router.Route name="about" path="about/" handler={About} />
      <Router.Route name="404" path="404" handler={NotFound} />
      <Router.Route name="404-catch" path="*" handler={NotFound} />
    </Router.Route>
  );

});

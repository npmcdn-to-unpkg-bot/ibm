define([
  'react',
  'react-router'
], function(
  React,
  Router
) {

  return React.createClass({
    componentDidUpdate: function () {
      if (componentHandler) { componentHandler.upgradeDom(); }
    },
    render: function() {
      return <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">
          <img className="logo-image" src="/assets/images/gov-webicons-nasa.png" width="150px" />
        </span>
        <nav className="mdl-navigation">
          <Router.Link to='home' className="mdl-navigation__link">Photostream</Router.Link>
          <Router.Link to='about' className="mdl-navigation__link">About</Router.Link>
        </nav>
      </div>
    }
  });

});

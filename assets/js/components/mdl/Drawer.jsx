define([
  'react',
  'react-router'
], function(
  React,
  Router
) {

  return React.createClass({

    // Lifecycle Methods
    //-------------------------
    // componentDidUpdate: function () {
    //   if (componentHandler) { componentHandler.upgradeDom(); }
    // },
    render: function() {
      return <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">
          <img className="logo-image" src="/assets/images/gov-webicons-nasa.png" width="150px" />
        </span>
        <nav className="mdl-navigation">
          <Router.Link to='home' className="mdl-navigation__link">Photo Stream</Router.Link>
          <Router.Link to='recent' className="mdl-navigation__link">Recent</Router.Link>
          <Router.Link to='albums' className="mdl-navigation__link">Albums</Router.Link>
        </nav>
      </div>
    }
  });

});


// <div className="android-drawer-separator"></div>
// <span className="mdl-navigation__link" href="">Versions</span>
// <a className="mdl-navigation__link" href="">Lollipop 5.0</a>
// <a className="mdl-navigation__link" href="">KitKat 4.4</a>
// <a className="mdl-navigation__link" href="">Jelly Bean 4.3</a>
// <a className="mdl-navigation__link" href="">Android history</a>
// <div className="android-drawer-separator"></div>
// <span className="mdl-navigation__link" href="">Resources</span>
// <a className="mdl-navigation__link" href="">Official blog</a>
// <a className="mdl-navigation__link" href="">Android on Google+</a>
// <a className="mdl-navigation__link" href="">Android on Twitter</a>
// <div className="android-drawer-separator"></div>
// <span className="mdl-navigation__link" href="">For developers</span>
// <a className="mdl-navigation__link" href="">App developer resources</a>
// <a className="mdl-navigation__link" href="">Android Open Source Project</a>
// <a className="mdl-navigation__link" href="">Android SDK</a>

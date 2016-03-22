define([
  'react',
  'react-router'
  // 'classnames',
], function(
  React,
  Router
  // classNames
) {

  return React.createClass({

    // getDefaultProps: function () {
    //   return {}
    // },

    // propTypes: {
    //   locations: React.PropTypes.array.isRequired,
    //   selectLocation: React.PropTypes.func.isRequired,
    //   selectedLocation: React.PropTypes.string
    // },


    // Lifecycle Methods
    //-------------------------
    // componentDidMount: function () {
    //   // Workaround for the MDL drawer not handling transitions very well and leaving the overlay behind
    //   if (document.querySelector('.mdl-layout__drawer')) {
    //     document.querySelector('.mdl-layout__drawer').addEventListener('click', function (e) {
    //       var drawerButton = document.querySelector('.mdl-layout__drawer-button');
    //       if (drawerButton && drawerButton.offsetHeight > 0) { drawerButton.click(); }
    //     }, false);
    //   }
    // },

    // componentWillUnmount: function () {
    //   // Remove the drawer toggle listener
    //   document.querySelector('.mdl-layout__drawer').removeEventLister('click');
    // },

    componentWillMount: function () {
      console.log('test2');
    },

    render: function() {
      console.log('test');
      return <div className="android-header mdl-layout__header mdl-layout__header--waterfall">
        test
      </div>
    }
  });

});


// <div className="mdl-layout__header-row">
//   <span className="android-title mdl-layout-title">
//     <img className="android-logo-image" src="images/android-logo.png" />
//   </span>
//   <div className="android-header-spacer mdl-layout-spacer"></div>
//   <div className="android-search-box mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right mdl-textfield--full-width">
//     <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search-field">
//       <i className="material-icons">search</i>
//     </label>
//     <div className="mdl-textfield__expandable-holder">
//       <input className="mdl-textfield__input" type="text" id="search-field" />
//     </div>
//   </div>
//   <div className="android-navigation-container">
//     <nav className="android-navigation mdl-navigation">
//       <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Phones</a>
//       <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Tablets</a>
//       <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Wear</a>
//       <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">TV</a>
//       <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Auto</a>
//       <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">One</a>
//       <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Play</a>
//     </nav>
//   </div>
//   <span className="android-mobile-title mdl-layout-title">
//     <img className="android-logo-image" src="images/android-logo.png" />
//   </span>
//   <button className="android-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect" id="more-button">
//     <i className="material-icons">more_vert</i>
//   </button>
//   <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" htmlFor="more-button">
//     <li className="mdl-menu__item">5.0 Lollipop</li>
//     <li className="mdl-menu__item">4.4 KitKat</li>
//     <li disabled className="mdl-menu__item">4.3 Jelly Bean</li>
//     <li className="mdl-menu__item">Android History</li>
//   </ul>
// </div>

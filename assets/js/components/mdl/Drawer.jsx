define([
  'react',
  'react-router',
  'moment',
  'classnames',
  'components/LocationLink',
  'components/theme/Title',
], function(
  React,
  Router,
  moment,
  classNames,
  LocationLink,
  Title
) {

var Drawer = React.createClass({

  getDefaultProps: function () {
    return { selectedLocation: "" }
  },

  propTypes: {
    locations: React.PropTypes.array.isRequired,
    selectLocation: React.PropTypes.func.isRequired,
    selectedLocation: React.PropTypes.string
  },


  // Lifecycle Methods
  //-------------------------
  componentDidMount: function () {
    // Workaround for the MDL drawer not handling transitions very well and leaving the overlay behind
    if (document.querySelector('.mdl-layout__drawer')) {
      document.querySelector('.mdl-layout__drawer').addEventListener('click', function (e) {
        var drawerButton = document.querySelector('.mdl-layout__drawer-button');
        if (drawerButton && drawerButton.offsetHeight > 0) { drawerButton.click(); }
      }, false);
    }
  },

  componentWillUnmount: function () {
    // Remove the drawer toggle listener
    document.querySelector('.mdl-layout__drawer').removeEventLister('click');
  },

  render: function() {
    var locationList = this.props.locations.map(function (location) {
      return  <LocationLink key={'locationLink' + location.Name}
                className={classNames('mdl-navigation__link', { 'active': (this.props.selectedLocation === location.Name) })}
                onLocationSelect={this.props.selectedLocation === location.Name ? null : this.props.selectLocation.bind(null, location)}
                {...location}
              />
      }.bind(this));

    return (
      <div className="mdl-layout__drawer">

        <Title />

        <nav className="mdl-navigation">

          <div className="mdl-navigation__item">
            <Router.Link to='default' className="mdl-navigation__link">
              <i className="fa fa-building"></i>
              Residential Dining
            </Router.Link>
            <nav className={classNames('mdl-navigation', 'animated', 'slideInLeft')}> {locationList} </nav>
          </div>

          <div className="mdl-navigation__item">
            <Router.Link to='feedback' className="mdl-navigation__link">
              <i className="fa fa-comment"> </i> Feedback
            </Router.Link>
          </div>

          <div className="mdl-navigation__item">
            <Router.Link to='changelog' className="mdl-navigation__link">
              <i className="fa fa-history"> </i> Changelog
            </Router.Link>
          </div>
        </nav>

        <div className="drawer-footer">
          <a href="https://itunes.apple.com/us/app/purdue-mobile-menus/id456046364" className="app-badge"> <img src="/menus/assets/images/badge_ios.svg" /> </a>
          <a href="https://play.google.com/store/apps/details?id=edu.purdue.dining.menus" className="app-badge"> <img src="/menus/assets/images/badge_googleplay.svg" /> </a>

          <div className="weAre"></div>

          <div className="copyright">
            © { (moment()).format("YYYY") } Purdue University.<br />
            West Lafayette, IN 47906 (765) 494-4600 <br />
            An equal access/equal opportunity university. <br />
          If you have trouble accessing this page because of a disability please <a href="mailto: urmktg@purdue.edu">contact us</a>.
          </div>
        </div>
      </div>
    );
  }
});

return Drawer;

});


// Unimplemented Features
//-------------------------
// <a className="mdl-navigation__link" href="#"> <i className="fa fa-star"></i>Favorites </a>
// <a className="mdl-navigation__link" href="#"> <i className="fa fa-cog"></i>Settings </a>



// NOTE: Future Support


// Toggle Lists
//-------------------------
// <i className={resDiningListIconClass}></i>
// onClick={this.toggleResDiningList}
// toggleResDiningList: function (e) {
//   e.preventDefault();
//   this.setState({
//     showResDiningList: !this.state.showResDiningList,
//     showCampusDiningList: false
//   });
// },
//
// toggleCampusDiningList: function (e) {
//   e.preventDefault();
//   this.setState({
//     showCampusDiningList: !this.state.showCampusDiningList,
//     showResDiningList: false
//   });
// },



    // Campus Dining Menu Component(s)
    //-------------------------
    // campusDiningLocationListClass = classNames('fa', 'menu-status-icon', {
    //   'fa-caret-down' : !this.state.showCampusDiningList,
    //   'fa-caret-up' : this.state.showCampusDiningList
    // });
    // campusDiningMenuItem = <div className="mdl-navigation__item">
    //   <a className="mdl-navigation__link" href="#"  onClick={this.toggleCampusDiningList}>
    //     <i className="fa fa-spoon"></i>
    //     Campus Dining
    //     <i className={campusDiningLocationListClass}></i>
    //   </a>
    //   <nav className="mdl-navigation"> {this.state.showCampusDiningList ? locationList : null} </nav>
    // </div>

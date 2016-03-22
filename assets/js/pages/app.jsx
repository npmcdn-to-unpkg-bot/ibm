define([
  'react', 'react-router',
  'stores/PhotoStore', 'actions/FlickrActions',
  'components/mdl/Header',
  'utility/helpers'
], function (
  React, Router,
  PhotoStore, FlickrActions,
  Header,
  helpers
) {

  return React.createClass({

    // Utility Functions
    //-------------------------
    updateStateFromStore: function () {
      this.setState(this.getStateFromStore());
    },

    getStateFromStore: function () {
       return { photos: PhotoStore.getPhotos() }
     },


    // Definition
    //-------------------------
    getInitialState: function () {
      return this.getStateFromStore();
    },

    // mixins: [ Router.Navigation, Router.State ],

    // Events
    //-------------------------

    // Lifecycle Methods
    //-------------------------
    componentDidMount: function () {
      PhotoStore.addChangeListener(this.updateStateFromStore);
    },

    componentWillMount: function () { },

    componentWillUnmount: function () {
      PhotoStore.removeChangeListener(this.updateStateFromStore);
    },

    componentDidUpdate: function () {
      // Register Google MDL components
      // if (componentHandler) { componentHandler.upgradeDom(); }
    },

    renderLoading: function () {

    },

    renderPage: function () {
      return this.state.photos.map(function (photo, index) {
        return <div key={photo.id}>{photo.title + " " + photo.id}</div>
      });
    },

    // NOTE: You CANNOT USE MDL classes on the ROOTDOM element that ReactRouter is binding too...
    // the app will still work but you will throw an error on page transitions because MDL is manipulating the ROOTDOM node.
    // So this is a No No.
    render: function () {

      return <div>

        {Header}

        <div className="android-drawer mdl-layout__drawer">
          <span className="mdl-layout-title">
            <img className="android-logo-image" src="images/android-logo-white.png" />
          </span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">Phones</a>
            <a className="mdl-navigation__link" href="">Tablets</a>
            <a className="mdl-navigation__link" href="">Wear</a>
            <a className="mdl-navigation__link" href="">TV</a>
            <a className="mdl-navigation__link" href="">Auto</a>
            <a className="mdl-navigation__link" href="">One</a>
            <a className="mdl-navigation__link" href="">Play</a>
            <div className="android-drawer-separator"></div>
            <span className="mdl-navigation__link" href="">Versions</span>
            <a className="mdl-navigation__link" href="">Lollipop 5.0</a>
            <a className="mdl-navigation__link" href="">KitKat 4.4</a>
            <a className="mdl-navigation__link" href="">Jelly Bean 4.3</a>
            <a className="mdl-navigation__link" href="">Android history</a>
            <div className="android-drawer-separator"></div>
            <span className="mdl-navigation__link" href="">Resources</span>
            <a className="mdl-navigation__link" href="">Official blog</a>
            <a className="mdl-navigation__link" href="">Android on Google+</a>
            <a className="mdl-navigation__link" href="">Android on Twitter</a>
            <div className="android-drawer-separator"></div>
            <span className="mdl-navigation__link" href="">For developers</span>
            <a className="mdl-navigation__link" href="">App developer resources</a>
            <a className="mdl-navigation__link" href="">Android Open Source Project</a>
            <a className="mdl-navigation__link" href="">Android SDK</a>
          </nav>
        </div>

        {this.state.photos.length > 0 ? this.renderPage() : null}

      </div>;
    }

  });

});





// <Drawer
//   selectLocation={this.selectLocation}
//   selectedLocation={this.getParams().locationName}
//   locations={this.state.locations}
//   showResDiningList={true}
// />
//
// <SearchDrawer
//   showSearch={this.state.showSearch}
//   jumpToMeal={this.jumpToMeal}
//   jumpToItem={this.jumpToItem}
// />
//
// <main className="mdl-layout__content">
//
//   <Router.RouteHandler
//     locations={this.state.locations}
//     selectLocation={this.selectLocation} selectedLocation={this.state.selectedLocation}
//     selectMeal={this.selectMeal} selectedMeal={this.state.selectedMeal}
//     selectDate={this.selectDate} selectedDate={this.state.selectedDate}
//     selectLocationFromCache={this.selectLocationFromCache}
//     jumpToMeal={this.jumpToMeal}
//   />
// </main>

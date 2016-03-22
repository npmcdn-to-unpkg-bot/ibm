define([
  'react', 'react-router',
  'stores/PhotoStore', 'actions/FlickrActions',
  'components/mdl/Header', 'components/mdl/Drawer',
  'utility/helpers'
], function (
  React, Router,
  PhotoStore, FlickrActions,
  Header, Drawer,
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
    componentWillMount: function () {
      PhotoStore.addChangeListener(this.updateStateFromStore);
    },

    componentWillUnmount: function () {
      PhotoStore.removeChangeListener(this.updateStateFromStore);
    },

    componentDidUpdate: function () {
      if (componentHandler) { componentHandler.upgradeDom(); }
    },

    renderPage: function () {
      return this.state.photos.map(function (photo, index) {
          return <div key={photo.id}>
            {photo.title + " " + photo.images.thumb}
            <img src={photo.images.thumb} height="100px" />
          </div>
        });
    },

    // NOTE: You CANNOT USE MDL classes on the ROOTDOM element that ReactRouter is binding too...
    // the app will still work but you will throw an error on page transitions because MDL is manipulating the ROOTDOM node. So this is a No No.  You must also render the mdl-layout__content or MDL will throw an error.

    render: function () {
      return <div>

        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">

        <Header />

        <Drawer />

        <div className="mdl-layout__content">

          {this.state.photos.length > 0 ? this.renderPage() : null}

        </div>

      </div>
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

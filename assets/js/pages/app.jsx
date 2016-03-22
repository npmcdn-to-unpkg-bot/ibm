define([
  'react', 'react-router', 'moment',
  'stores/PhotoStore', 'actions/FlickrActions',
  'utility/helpers'
], function (
  React, Router, moment,
  PhotoStore, FlickrActions,
  helpers
) {

  return React.createClass({

    // Utility Functions
    //-------------------------
    updateStateFromStore: function () {
      console.log('triggered');
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
      if (componentHandler) { componentHandler.upgradeDom(); }
    },

    renderPage: function () {
      // console.log(this.state.photos + "count");
      return this.state.photos.photo.map(function (photo) {
        // console.log(photo);
        return <div>{photo.title + " " + photo.id}</div>
      });
    },

    // NOTE: You CANNOT USE MDL classes on the ROOTDOM element that ReactRouter is binding too...
    // the app will still work but you will throw an error on page transitions because MDL is manipulating the ROOTDOM node.
    // So this is a No No.
    render: function () {
      // console.log(this.state.photos.length);
      console.log('render');
      return <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
          App Running!
          {this.state.photos.length > 0 ? this.renderPage() : null}
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

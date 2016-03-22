define([
  'react', 'react-router', 'moment',
  // 'stores/LocationStore', 'actions/MenuActions',
  // 'components/mdl/Drawer', 'components/SearchDrawer', 'components/theme/Title',
  'utility/helpers'
], function (
  React, Router, moment,
  // LocationStore, MenuActions,
  // Drawer, SearchDrawer, Title,
  helpers
) {

  return React.createClass({

    // Utility Functions
    //-------------------------
    updateStateFromStore: function () {
      this.setState(this.getStateFromStore());
    },

    getStateFromStore: function () {
      //  return { locations: LocationStore.getLocations() }
     },


    // Definition
    //-------------------------
    // getInitialState: function () {
    // },

    mixins: [ Router.Navigation, Router.State ],

    // Events
    //-------------------------

    // Lifecycle Methods
    //-------------------------
    componentDidMount: function () {
      // LocationStore.addChangeListener(this.updateStateFromStore);
    },

    componentWillMount: function () {
    },

    componentWillUnmount: function () {
      // LocationStore.removeChangeListener(this.updateStateFromStore);
    },

    componentDidUpdate: function () {
      // Register Google MDL components
      if (componentHandler) { componentHandler.upgradeDom(); }
    },

    // NOTE: You CANNOT USE MDL classes on the ROOTDOM element that ReactRouter is binding too...
    // the app will still work but you will throw an error on page transitions because MDL is manipulating the ROOTDOM node.
    // So this is a No No.
    render: function () {
      return <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
          App Running!
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

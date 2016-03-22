define([
  '../dispatcher/AppDispatcher',
  '../constants/MenuConstants',
  '../apis/MenusApi',
  'react-router',
  'moment'
], function (
  AppDispatcher,
  MenuConstants,
  MenusApi,
  Router,
  moment
) {

var MenuActions = {
  fetchLocations: function() {
    MenusApi.fetchLocations(function (locations) {
      AppDispatcher.dispatch({
        actionType: MenuConstants.LOCATION_FETCH,
        locations: locations
      });
    });
  },

  fetchMenu: function(locationName, date) {
    MenusApi.fetchMenu(locationName, date, function(menu) {
      AppDispatcher.dispatch({
        actionType: MenuConstants.MENU_SELECT,
        menu: menu
      });
    });
  },

  fetchItem: function(itemId) {
    MenusApi.fetchItem(itemId, function (item) {
      AppDispatcher.dispatch({
        actionType: MenuConstants.ITEM_FETCH,
        item: item
      });
    });
  },

  fetchFavorites: function() {
    MenusApi.fetchFavorites(function(favorites) {
      AppDispatcher.dispatch({
        actionType: MenuConstants.FAVORITES_FETCH,
        favorites: favorites
      });
    });
  }
};

return MenuActions;

});

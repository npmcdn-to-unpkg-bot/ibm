define([
  '../dispatcher/AppDispatcher',
  'eventEmitter',
  '../constants/MenuConstants',
  'utility/object-assign',
  'moment'
], function (
  AppDispatcher,
  EventEmitter,
  MenuConstants,
  assign,
  moment
) {


// dispatcher events
var CHANGE_EVENT = 'change';

// store private variables
var _favorites = [];
var _menus = [];  // currently selected menu

var MenusStore = assign({}, EventEmitter.prototype, {

  // Store state accessors
  //-------------------------

  getFavorites: function() {
    return _favorites;
  },

  getMenu: function(locationName, date) {
    for (var i = 0; i < _menus.length; i++) {
      var menu = _menus[i];
      if (menu.Date.isSame(date, 'day') && menu.Location == locationName) {
        return menu;
      }
    }
    return null;
  },

  // Store state change
  //-------------------------
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle actions
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {

    case MenuConstants.MENU_SELECT:
      _menus.push(action.menu);
      MenusStore.emitChange();
      break;

    case MenuConstants.SHOW_FAVORITES:
      _favorites = action.favorites;
      MenusStore.emitChange();
      break;

    default:
      // no op
  }
});

return MenusStore;

});

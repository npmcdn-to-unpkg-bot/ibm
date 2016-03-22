define([
  '../dispatcher/AppDispatcher',
  'eventEmitter',
  '../constants/MenuConstants',
  'utility/object-assign'
], function (
  AppDispatcher,
  EventEmitter,
  MenuConstants,
  assign
) {


// dispatcher events
var CHANGE_EVENT = 'change';

// store private variables
var _favorites = [];

var FavoriteStore = assign({}, EventEmitter.prototype, {

  // Store state accessors
  //-------------------------
  getFavorites: function() {
    return _favorites;
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

    case MenuConstants.FAVORITES_FETCH:
      _favorites = action.favorites;
      FavoriteStore.emitChange();
      break;

    default:
      // no op
  }
});

return FavoriteStore;

});

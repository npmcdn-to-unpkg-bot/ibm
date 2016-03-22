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
var _locations = [];

var LocationStore = assign({}, EventEmitter.prototype, {

  // Store state accessors
  //-------------------------
  getLocations: function() {
    return _locations;
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

    case MenuConstants.LOCATION_FETCH:
      _locations = action.locations;
      LocationStore.emitChange();
      break;

    default:
      // no op
  }
});

return LocationStore;

});

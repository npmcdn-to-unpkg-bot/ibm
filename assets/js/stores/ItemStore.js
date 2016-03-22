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
var _items = {};

var ItemStore = assign({}, EventEmitter.prototype, {

  // Store state accessors
  //-------------------------
  getItem: function(itemId) {
    return _items[itemId];
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

    case MenuConstants.ITEM_FETCH:
      _items[action.item.ID] = action.item;
      ItemStore.emitChange();
      break;

    default:
      // no op
  }
});

return ItemStore;

});

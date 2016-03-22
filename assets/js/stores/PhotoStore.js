define([
  '../dispatcher/AppDispatcher',
  'eventEmitter',
  '../constants/FlickrConstants',
  'utility/object-assign'
], function (
  AppDispatcher,
  EventEmitter,
  FlickrConstants,
  assign
) {


// dispatcher events
var CHANGE_EVENT = 'change';

// store private variables
var _photos = [];  // currently photos

var MenusStore = assign({}, EventEmitter.prototype, {

  // Store state accessors
  //-------------------------

  getPhotos: function() {
    return _photos;
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
  console.log('action', action);

  switch(action.actionType) {
    case FlickrConstants.PHOTOS_FETCH:
      _photos.push(action.photos);
      PhotoStore.emitChange();
      break;

    default:
      // no op
  }
});

return MenusStore;

});

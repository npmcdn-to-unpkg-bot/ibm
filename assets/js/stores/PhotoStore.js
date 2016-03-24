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
var _pages = null;
var _page = null;
var _total = null;

var PhotoStore = assign({}, EventEmitter.prototype, {

  // Store state accessors
  //-------------------------
  getDetails: function () {
    return {
      photos: _photos,
      pages: _pages,
      page: _page,
      total: _total,
    }
  },
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
  switch(action.actionType) {
    case FlickrConstants.PHOTOS_FETCH:
      _photos = action.photos;
      _pages = action.pages;
      _page = action.page;
      _total = action.total;

      PhotoStore.emitChange();
      break;
    default:
      // no op
  }
});

return PhotoStore;

});

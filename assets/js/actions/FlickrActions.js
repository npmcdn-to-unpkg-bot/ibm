define([
  '../dispatcher/AppDispatcher',
  '../constants/FlickrConstants',
  '../apis/FlickrAPI',
  'react-router'
], function (
  AppDispatcher,
  FlickrConstants,
  FlickrAPI,
  Router
) {

var FlickrActions = {
  fetchPhotos: function() {
    FlickrAPI.fetchPhotos(function (photos) {
      AppDispatcher.dispatch({
        actionType: FlickrConstants.PHOTOS_FETCH,
        photos: photos
      });
    });
  },
};

return FlickrActions;

});

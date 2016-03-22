define([
  '../dispatcher/AppDispatcher',
  '../constants/FlickrConstants',
  '../apis/FlickrAPI',
  'react-router'
], function (
  AppDispatcher,
  MenuConstants,
  MenusApi,
  Router
) {

var FlickrActions = {
  fetchPhotos: function() {
    console.log('test');
    FlickrAPI.fetchPhotos(function (photos) {
      console.log('test2');
      AppDispatcher.dispatch({
        actionType: FlickrConstants.PHOTOS_FETCH,
        photos: photos
      });
    });
  },
};

return FlickrActions;

});

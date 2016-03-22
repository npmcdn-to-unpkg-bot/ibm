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

var getImageURL = function (photo) {
  return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
}

var FlickrActions = {
  fetchPhotos: function() {
    FlickrAPI.fetchPhotos(function (photos) {
      AppDispatcher.dispatch({
        actionType: FlickrConstants.PHOTOS_FETCH,
        photos: photos.map(function (photo) {

          photo.images = {
            thumb: getImageURL(photo)
          };

          return photo;
        })
      });
    });
  },
};

return FlickrActions;

});


var sampleImgObj = { "id": "11738172576", "owner": "12218676@N04", "secret": "37d0aeb353", "server": "3803", "farm": 4, "title": "_IGP1164", "ispublic": 1, "isfriend": 0, "isfamily": 0 };

var urlLarge = 'https://farm' + sampleImgObj.farm + '.staticflickr.com/' + sampleImgObj.server + '/' + sampleImgObj.id + '_' + sampleImgObj.secret + '_b.jpg';

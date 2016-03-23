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

  var getImageURL = function (photo, size) {

    var sizes = {
      default: ".jpg",
      small: ".jpg",
      large: "_b.jpg"
    };

    return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + (typeof size !== "string" ? '.jpg' : sizes[size]);
  }

  var FlickrActions = {
    fetchPhotos: function(count) {
      FlickrAPI.fetchPhotos(function (photos) {
        AppDispatcher.dispatch({
          actionType: FlickrConstants.PHOTOS_FETCH,
          photos: photos.map(function (photo) {

            // NOTE: Striping out some bleh strings that muddle up the title
            photo.title = photo.title.replace(/ *\([^)]*\) */g, "");

            photo.images = {
              thumb: getImageURL(photo),
              full: getImageURL(photo, "large")
            };

            return photo;
          })
        });
      }, count);
    },
  };

  return FlickrActions;

});

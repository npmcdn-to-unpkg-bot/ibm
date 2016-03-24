define([
  'utility/helpers'
], function (
  helpers
) {

  var apiKey = '679e25f8cb85b7299cec2734962044ac';
  var userId = '35067687@N04';

  var FlickrAPI = {

    fetchPhotos: function (success, count, jumpTo) {

      var photoCount = count = count || 25;
      var page = jumpTo || 1;

      var url = 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=' + apiKey + '&user_id=' + userId + '&format=json&nojsoncallback=1&per_page=' + photoCount + '&page=' + page;

      helpers.ajax('GET', url, function (xhr, data) {
        success(data.photos);
      });
    },

    fetchImageInfo: function (photoId, success) {
      var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=' + apiKey + '&user_id=' + userId + '&format=json&nojsoncallback=1&photo_id=' + photoId;

      helpers.ajax('GET', url, function (xhr, data) {
        success(data.photo);
      });
    },


  }; // End Api

  return FlickrAPI;

}); // End Module

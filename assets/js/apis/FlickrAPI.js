define([
  'utility/helpers'
], function (
  helpers
) {

  var apiKey = '679e25f8cb85b7299cec2734962044ac';
  var userId = '35067687@N04';

  var FlickrAPI = {
    fetchPhotos: function (success, count) {

      var photoCount = count = count || 25;

      var url = 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=' + apiKey + '&user_id=' + userId + '&format=json&nojsoncallback=1&per_page=' + photoCount;

      helpers.ajax('GET', url, function (xhr, data) {
        success(data.photos.photo);
      });
    },

    // searchPhotos: function () {
    //   var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&user_id=' + userId + '&format=json&nojsoncallback=1&per_page=100';
    //
    //   helpers.ajax('GET', url, function (xhr, data) {
    //     success(data.photos.photo);
    //   });
    // },

    fetchImageInfo: function (photoId, success) {
      var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=' + apiKey + '&user_id=' + userId + '&format=json&nojsoncallback=1&photo_id=' + photoId;

      helpers.ajax('GET', url, function (xhr, data) {
        success(data.photo);
      });
    },


  }; // End Api

  return FlickrAPI;

}); // End Module







// fetchLocations: function(success) {
//   helpers.ajax('GET', apiRoot + 'locations', function (xhr, data) {
//     helpers.getGeoLocation(function (currentPosition) {
//       setDistances.call(this, data.Location, currentPosition, success);
//     }.bind(this),
//
//     setMeals.call(this, data.Location, success));
//   }.bind(this));
// },
//
// fetchMenu: function(locationName, date, success) {
//   var apiDate = date.format("YYYY-MM-DD");
//   var url = apiRoot + "locations/" + locationName + "/" + apiDate;
//
//   var done = function (xhr, data) {
//     var momentFormat = 'M/D/YYYY HH:mm:ss';
//     success({
//       Location: data.Location,
//       Notes: data.Notes,
//       Date: moment(data.Date, 'M/D/YYYY'),
//       Meals: data.Meals.map(function (meal) {
//         return {
//           Name: meal.Name,
//           Status: meal.Status,
//           Hours: {
//             StartTime: meal.Hours ? moment(data.Date + ' ' + meal.Hours.StartTime, momentFormat) : null,
//             EndTime: meal.Hours ? moment(data.Date + ' ' + meal.Hours.EndTime, momentFormat) : null
//           },
//           Stations: meal.Stations
//         }
//       })
//     });
//   }
//
//   helpers.ajax('GET', url, done);
// },
//
// fetchItem: function(itemId, success) {
//   helpers.ajax('GET', apiRoot + "items/" + itemId, function (xhr, data) { success(data); });
// },
//
// fetchFavorites: function(success) {
//
//   var ajaxSuccess = function (xhr, data) {
//     if (xhr.status === 401) {
//       var thisPage = window.location.href;
//       var service = apiMap['prod'] + "Menus/Home/CasRedirect?redirectUrl=" + encodeURIComponent(thisPage)
//       window.location.replace("https://www.purdue.edu/apps/account/cas/login?service=http://" + encodeURIComponent(service));
//     } else {
//       success(data.Favorite);
//     }
//   };
//
//   helpers.ajax('GET', apiRoot + "favorites", ajaxSuccess);
//
// },
//
// // We want to be able to cancel the previous request and fire the new one
// // This will prevent an old delayed request from triggering a state change.
// searchUpcomingLimiter: {
//   ajax: null,
//   call: function (searchTerm, success) {
//     var _self = this;
//     var url = apiRoot + "items/searchUpcoming/" + searchTerm;
//
//     if (_self.ajax !== null) { _self.ajax.abort(); }
//
//     _self.ajax = helpers.ajax('GET', url, function (xhr, data) {
//       _self.ajax = null;
//       success(data.Results);
//     });
//   }
// },
//
// searchUpcoming: function (searchTerm, success) {
//   if (typeof searchTerm === "string" && searchTerm.length > 0) {
//     this.searchUpcomingLimiter.call(searchTerm, success);
//   } else {
//     success( {error: true, message: "Invalid search" });
//   }
// } // End searchUpcoming

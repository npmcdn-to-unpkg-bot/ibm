"use strict";

// Launch the App
//-------------------------
require([
  'react', 'react-dom', 'react-router', 'pages/Routes', 'actions/FlickrActions'
], function (
  React, ReactDOM, Router, Routes, FlickrActions
) {

  var appContainer = document.getElementById("app_output");

  if (appContainer) {

    FlickrActions.fetchPhotos();

    Router.run(Routes, Router.HistoryLocation, function (Handler, state) {
      ReactDOM.render(React.createElement(Handler), appContainer);
    });
  }

  if (componentHandler) { componentHandler.upgradeDom(); }

});

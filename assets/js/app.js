"use strict";

// Launch the App
//-------------------------
require([
  'react', 'react-dom', 'react-router', 'pages/Routes'
], function (
  React, ReactDOM, Router, Routes
) {

  var appContainer = document.getElementById("app_output");

  if (appContainer) {
    // MenuActions.fetchLocations();

    Router.run(Routes, Router.HistoryLocation, function (Handler, state) {
      ReactDOM.render(React.createElement(Handler), appContainer);
    });
  }

});


// 'actions/MenuActions'

// MenuActions

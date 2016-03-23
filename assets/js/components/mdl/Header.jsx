define([
  'react', 'react-router'
], function(
  React, Router
) {

  return React.createClass({
    render: function() {
      return <div className="mdl-layout__header mdl-layout__header--waterfall">
        <div className="mdl-layout__header-row">
          <span className="android-title mdl-layout-title">
            <img className="logo-image" src="/assets/images/nasa_small.png" alt="NASA Logo" />
          </span>
        </div>
      </div>
    }
  });

});

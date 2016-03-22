define([
  'react', 'react-router'
], function (
  React, Router
) {

  var NotFound = React.createClass({

    // Definition
    //-------------------------
    mixins: [ Router.Navigation ],

    // Lifecycle Methods
    //-------------------------
    render: function () {
      return (
        <div className="notFound-page animated fadeIn">
          <p>We couldn't find that page... launched into space.</p>
        </div>
      );
    }
  });

  return NotFound;

});

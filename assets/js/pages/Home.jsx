define([
  'react',
  'utility/helpers'
], function (
  React,
  helpers
) {

  var HomePage = React.createClass({

    // Definition
    //-------------------------

    propTypes: {
      locations: React.PropTypes.array.isRequired,
      selectLocation: React.PropTypes.func.isRequired
    },

    // Lifecycle Methods
    //-------------------------
    componentWillMount: function () {
      // Clear the last location & date that was selected
      helpers.jumpPageToTop();
    },

    render: function () {

      return ( <div className="page">
       <h1>Home</h1>
      </div> );
    }
  });

  return HomePage;

});

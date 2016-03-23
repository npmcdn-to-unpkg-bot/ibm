define([
  'react',
], function (
  React
) {

  return React.createClass({

    // Lifecycle Methods
    //-------------------------
    render: function () {
      return (
        <div className="notFound-page">
          <h1>Houston</h1>
          <p>We have a problem.</p>
        </div>
      );
    }
  });

});

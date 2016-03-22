define([
  'react'
], function(
  React
) {

  return React.createClass({
    propTypes: {
      photos: React.PropTypes.array.isRequired
    },
    render: function() {
      return <div className="photostream">
        Photostream
        {this.props.photos.map(function (photo, index) {
            return <div key={photo.id}>
              <img src={photo.images.thumb} height="100px" />
            </div>
          })}
      </div>
    }
  });

});


// {photo.title + " " + photo.images.thumb}

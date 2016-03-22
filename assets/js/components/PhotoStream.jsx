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
        {this.props.photos.map(function (photo, index) {
            return <div className="photostream-photo" key={photo.id}>
              <img src={photo.images.thumb} />
            </div>
          })}
      </div>
    }
  });

});


// {photo.title + " " + photo.images.thumb}

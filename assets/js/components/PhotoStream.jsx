define([
  'react',
  'components/ActivePhoto',
  'classnames',
], function(
  React,
  ActivePhoto,
  classNames
) {

  return React.createClass({
    getInitialState: function () {
      return {
        selectedPhoto: null
      }
    },
    propTypes: {
      photos: React.PropTypes.array.isRequired
    },

    clearActive: function (e) {
      if (e) { e.preventDefault(); }
      this.setState({selectedPhoto: null})
    },

    onPhotoClick: function (photo, e) {
      e.preventDefault();
      this.setState({selectedPhoto: photo.id});
    },

    componentDidUpdate: function () { if (componentHandler) { componentHandler.upgradeDom(); } },

    render: function() {
      return <div className="photostream">
        {this.props.photos.map(function (photo, index) {

            var key = photo.id;

            var style = { backgroundImage: 'url(' + photo.images.thumb + ')' }

            if ( photo.id === this.state.selectedPhoto) {
              return <ActivePhoto key="activePhoto" {...photo} closeActive={this.clearActive} />;
            }

            return <div className="photostream-photo" key={key} onClick={this.onPhotoClick.bind(null,photo)}>
              <div className="photostream-photo-wrapper">
                <img src={photo.images.thumb} />
              </div>
              <div className="photostream-photo-title">{photo.title}</div>
            </div>

          }.bind(this))}

          <div className="photostream-photo photostream-photo--empty"></div>
          <div className="photostream-photo photostream-photo--empty"></div>
          <div className="photostream-photo photostream-photo--empty"></div>
          <div className="photostream-photo photostream-photo--empty"></div>
          <div className="photostream-photo photostream-photo--empty"></div>
          <div className="photostream-photo photostream-photo--empty"></div>
          <div className="photostream-photo photostream-photo--empty"></div>
          <div className="photostream-photo photostream-photo--empty"></div>
          <div className="photostream-photo photostream-photo--empty"></div>
          <div className="photostream-photo photostream-photo--empty"></div>

      </div>
    }
  });

});


// {photo.title + " " + photo.images.thumb}

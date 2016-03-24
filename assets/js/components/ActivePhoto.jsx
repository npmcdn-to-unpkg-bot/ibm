define([
  'react', 'classnames', 'apis/FlickrAPI', 'utility/helpers'
], function (
  React, classNames, FlickrAPI, helpers
) {

  return React.createClass({
    getInitialState: function () {
      return {
        comments: 0,
        dates: null,
        dateuploaded: null,
        description: null,
        editability: null,
        tags: null,
        title: null,
        urls: null,
        views: 0,
        isFavorite: helpers.favorites.contains(this.props.id)
      }
    },

    componentWillMount: function () {
      FlickrAPI.fetchImageInfo(this.props.id, function (data) {
        if (this.isMounted()) {
          this.setState({
            comments: data.comments._content,
            dates: data.dates,
            dateuploaded: data.dateuploaded,
            description: data.description._content,
            urls: data.urls,
            tags: data.tags,
            views: data.views,
          });
        }
      }.bind(this));
    },

    handleFavoriteClick: function () {
      helpers.favorites.toggle(this.props.id);

      this.setState({ isFavorite: helpers.favorites.contains(this.props.id) });
    },

    render: function() {

      var style = { backgroundImage: 'url(' + this.props.images.full + ')' }

      return <div className="photostream-photo-details" key="active">

        <div className="photostream-photo-details-wrapper">

          <button id="close" className="photostream-photo-details-close mdl-button mdl-js-button mdl-button--fab" onClick={function () { this.props.closeActive() }.bind(this)}>
            <i className="material-icons">close</i>
          </button>
          <div className="mdl-tooltip" htmlFor="close">Close</div>

          <div className="photo-details-image">
            <img src={this.props.images.full} />
          </div>

          <div className="photo-details-info">

            <div className="photo-details-info-buttons">
              <button id="fav" className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" onClick={this.handleFavoriteClick}>
                <i className="material-icons">{this.state.isFavorite ? 'favorite' : 'favorite_border'}</i>
              </button>
              <div className="mdl-tooltip mdl-tooltip--large" htmlFor="fav">{this.state.isFavorite ? 'Remove Favorite' : 'Add Favorite'}</div>
            </div>

            <h1 className="photo-details-info-title">{this.props.title}</h1>
            <p className="photo-details-info-desc">{this.state.description ? this.state.description : "Loading..."}</p>
          </div>

          <div className="photo-details-actions">
            <a href={this.props.images.full} download={this.props.images.full} className="action mdl-button mdl-js-button mdl-js-ripple-effect action--left"> <i className="material-icons">file_download</i>Download</a>

            <span id="a3" className="action mdl-button mdl-js-button mdl-js-ripple-effect"> <i className="material-icons">remove_red_eye</i>{this.state.views}</span>
            <div className="mdl-tooltip mdl-tooltip--large" htmlFor="a3">Views</div>

            <span id="a2" className="action mdl-button mdl-js-button mdl-js-ripple-effect"> <i className="material-icons">mode_comment</i>{this.state.comments}</span>
            <div className="mdl-tooltip mdl-tooltip--large" htmlFor="a2">Comments</div>

          </div>

        </div>
      </div>
    }
  });

});

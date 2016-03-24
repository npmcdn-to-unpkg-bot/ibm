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
      photos: React.PropTypes.array.isRequired,
      view: React.PropTypes.string
    },

    clearActive: function (e) {
      if (e) { e.preventDefault(); }
      this.setState({selectedPhoto: null})
    },

    onPhotoClick: function (photo, e) {
      e.preventDefault();
      this.setState({selectedPhoto: photo});
    },

    componentDidUpdate: function () { if (componentHandler) { componentHandler.upgradeDom(); } },

    renderList: function () {

      var list = this.props.photos.map(function (photo, index) {

        var key = photo.id;

        return <li key={key} className="mdl-list__item">

          <span className="mdl-list__item-primary-content" onClick={this.onPhotoClick.bind(null,photo)}>
            <i className="mdl-list__item-avatar" style={{ backgroundImage:'url(' + photo.images.thumb + ')' }}></i>
            <span className="title">{photo.title}</span>
          </span>

          <span className="mdl-list__item-secondary-content">
              <button id={"options_menu_" + key} className="mdl-button mdl-js-button mdl-button--icon">
                <i className="material-icons">more_vert</i>
              </button>
              <div className="mdl-tooltip" htmlFor="options_menu">Options</div>

              <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                  htmlFor={"options_menu_" + key}>

                  <li className="mdl-menu__item" onClick={this.onPhotoClick.bind(null,photo)}>
                    View
                  </li>
                  <li className="mdl-menu__item">
                    <a href={photo.images.full} download={photo.images.full} className="mdl-navigation__link">Download</a>
                  </li>
              </ul>

          </span>

        </li>;
      }.bind(this));

      return <ul className="photostream--list mdl-list">
        {list}
      </ul>
    },

    renderGrid: function () {
      var className = classNames("photostream--grid", { "photostream--grid--comfy" : this.props.view === "comfy" });

      return <div className={className}>

        {this.props.photos.map(function (photo, index) {

            var key = photo.id;

            return <div className="photostream-photo" key={key} onClick={this.onPhotoClick.bind(null,photo)}>
              <div className="photostream-photo-wrapper">
                <img src={photo.images.thumb} />
              </div>
              <div className="photostream-photo-title">
                <span className="photostream-photo-title-text">{photo.title}</span>
              </div>
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

      </div>;
    },

    render: function() {
      var stream = activePhoto = null;

      switch (this.props.view) {
        case 'list':
          stream = this.renderList();
          break;
        default:
          stream = this.renderGrid();
      }

      if (this.state.selectedPhoto) {
        activePhoto = <ActivePhoto key="activePhoto" {...this.state.selectedPhoto} closeActive={this.clearActive} />;
      }

      return <div className="photostream">
        {activePhoto}
        {stream}
      </div>;
    }
  });

});

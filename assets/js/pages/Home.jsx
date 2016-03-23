define([
  'react',
  'stores/PhotoStore', 'actions/FlickrActions',
  'components/PhotoStream',
  'utility/helpers'
], function (
  React,
  PhotoStore, FlickrActions,
  PhotoStream,
  helpers
) {

  return React.createClass({

    updateStateFromStore: function () { this.setState(this.getStateFromStore()); },

    getStateFromStore: function () { return { photos: PhotoStore.getPhotos() } },

    getInitialState: function () { return this.getStateFromStore(); },

    updatePhotos: function (count) {
      this.setState({photos: []});
      FlickrActions.fetchPhotos(count);
    },

    // Lifecycle Methods
    //-------------------------
    componentWillMount: function () { PhotoStore.addChangeListener(this.updateStateFromStore); },

    componentWillUnmount: function () { PhotoStore.removeChangeListener(this.updateStateFromStore); },

    componentDidUpdate: function () { if (componentHandler) { componentHandler.upgradeDom(); } },

    render: function () {
      var content = this.state.photos.length > 0 ? <PhotoStream key="content" photos={this.state.photos} /> : <div className="mdl-spinner mdl-js-spinner is-active" key="loading"></div>;

      return <div>

          <div className="pageTitle" key="pageTitle">

            <h1>Photostream</h1>

            <button id="demo-menu-lower-right" className="mdl-button mdl-js-button mdl-button--icon">
              <i className="material-icons">expand_more</i>
            </button>

            <ul className="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
                htmlFor="demo-menu-lower-right">

              {[25,50,100,250,500].map(function (count, index) {
                return <li key={"gallery_size_" + index} className="mdl-menu__item" onClick={this.updatePhotos.bind(null, count)}>Show {count} Photos</li>
              }.bind(this))}


            </ul>
          </div>

          {content}

        </div>;
    }
  });

});

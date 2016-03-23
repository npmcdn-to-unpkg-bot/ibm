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

    getInitialState: function () {
      var state = this.getStateFromStore();
      state.view = "comfy";
      return state;
    },

    updatePhotos: function (count) {
      this.setState({photos: []});
      FlickrActions.fetchPhotos(count);
    },

    updateView: function (view) {
      this.setState({view: view});
    },

    // Lifecycle Methods
    //-------------------------
    componentWillMount: function () { PhotoStore.addChangeListener(this.updateStateFromStore); },

    componentWillUnmount: function () { PhotoStore.removeChangeListener(this.updateStateFromStore); },

    componentDidUpdate: function () { if (componentHandler) { componentHandler.upgradeDom(); } },

    render: function () {
      var content = this.state.photos.length > 0 ? <PhotoStream key="content" photos={this.state.photos} view={this.state.view} /> : <div className="mdl-spinner mdl-js-spinner is-active" key="loading"></div>;

      return <div>

          <div className="pageTitle" key="pageTitle">

            <h1>Photostream</h1>

              <button id="view_list" className="mdl-button mdl-js-button mdl-button--icon"  onClick={this.updateView.bind(null, "list")}>
                <i className="material-icons">view_list</i>
              </button>
              <div className="mdl-tooltip" htmlFor="view_list">List View</div>

              <button id="view_large" className="mdl-button mdl-js-button mdl-button--icon" onClick={this.updateView.bind(null, "comfy")}>
                <i className="material-icons">view_module</i>
              </button>
              <div className="mdl-tooltip" htmlFor="view_large">Large Grid</div>

              <button id="view_grid" className="mdl-button mdl-js-button mdl-button--icon" onClick={this.updateView.bind(null, "grid")}>
                <i className="material-icons">view_comfy</i>
              </button>
              <div className="mdl-tooltip" htmlFor="view_grid">Grid</div>

            <button id="demo-menu-lower-right" className="mdl-button mdl-js-button mdl-button--icon">
              <i className="material-icons">more_vert</i>
            </button>

            <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                htmlFor="demo-menu-lower-right">

              {[10,25,50,100,250,500].map(function (count, index) {
                return <li key={"gallery_size_" + index} className="mdl-menu__item" onClick={this.updatePhotos.bind(null, count)}>Show {count} Photos</li>
              }.bind(this))}
            </ul>


          </div>

          {content}

        </div>;
    }
  });

});


//
// <button id="" className="mdl-button mdl-js-button mdl-button--icon">
//   <i className="material-icons">view_compact</i>
// </button>

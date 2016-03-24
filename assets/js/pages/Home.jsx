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

    getStateFromStore: function () { return PhotoStore.getDetails() },

    getInitialState: function () {
      var state = this.getStateFromStore();
      state.view = "comfy";
      return state;
    },

    updatePhotos: function (count, page) {
      this.setState({
        photos: [],
        pages: 0
      });
      FlickrActions.fetchPhotos(count, page);
    },

    updateView: function (view) {
      this.setState({view: view});
    },

    renderPaginationButton(page) {
      if (this.state.page === page) {
        return <button key="pagination_active" className="mdl-button mdl-js-button mdl-button--fab">{page}</button>
      }

      return <button key={"pagination" + page} className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored" onClick={this.updatePhotos.bind(null, this.state.perpage, page )}>{page}</button>
    },

    renderPagination: function () {
      if (this.state.pages === 0) { return null; }
      var visibleLinks = 4;
      var page = this.state.page;
      var pages = this.state.pages;
      var links = [];
      var appendLastPage = false;
      var prependFirstPage = page > visibleLinks || page > 3;

      var floor = page - 2;

      if (page > pages - visibleLinks) {
        floor = pages - visibleLinks + 1;
      } else {
        appendLastPage = true;
      }

      if (prependFirstPage) {
        links.push(this.renderPaginationButton(1));
        links.push(<span key="pagination_spacer_start" className="pagination_spacer">...</span>);
      }
      for (var i = floor; i < floor + visibleLinks; i++) {
        if (i > 0 && i <= pages) {
          links.push(this.renderPaginationButton(i));
        } else if (i < 1) {
          visibleLinks++;
        }
      }

      if (appendLastPage) {
        links.push(<span key="pagination_spacer_end" className="pagination_spacer">...</span>);
        links.push(this.renderPaginationButton(this.state.pages));
      }

      return <div className="pagination"> {links} </div>
    },

    renderLoading: function () {
      return <div className="loading message mdl-card">

        <div className="mdl-spinner mdl-js-spinner is-active" key="loading"></div>
        <h1>
          Loading
        </h1>

        <p>Prepping for launch.</p>

      </div>
    },

    // Lifecycle Methods
    //-------------------------
    componentWillMount: function () { PhotoStore.addChangeListener(this.updateStateFromStore); },

    componentWillUnmount: function () { PhotoStore.removeChangeListener(this.updateStateFromStore); },

    componentDidUpdate: function () { if (componentHandler) { componentHandler.upgradeDom(); } },

    render: function () {
      var content = this.state.photos.length > 0 ? <PhotoStream key="content" photos={this.state.photos} view={this.state.view} /> : this.renderLoading();

      // content = this.renderLoading();

      return <div>

          <div className="pageTitle" key="pageTitle">

            <h1>Photostream <small>({this.state.total})</small></h1>

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

          {this.renderPagination()}

        </div>;
    }
  });

});


//
// <button id="" className="mdl-button mdl-js-button mdl-button--icon">
//   <i className="material-icons">view_compact</i>
// </button>

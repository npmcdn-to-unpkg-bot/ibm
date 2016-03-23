define([
  'react', 'react-router',
  'utility/helpers'
], function (
  React, Router,
  helpers
) {

  return React.createClass({

    render: function () {

      return <div>

        <div className="pageTitle" key="pageTitle">
          <h1>About</h1>
        </div>


        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">

            <div className="mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title">
                <h1 className="mdl-card__title-text">IBM FED Challenge</h1>
              </div>

              <h3>Created by Kyle Wiedman - March 2016</h3>

              <div className="mdl-card__supporting-text">
                <p>A Flickr web-app that fetches images from Nasa's account via the <a href="https://github.com/ibmfrontend/fedexercise/blob/master/API_DETAILS.md">Flickr API</a>.</p>

                <p>
                  Favorites are stored using cookies. <br />
                <a href="#" onClick={helpers.favorites.clear}>Clear Favorites</a>
                </p>
                <p>
                  Check out the <Router.Link to='404' className="">Error Page</Router.Link>
                </p>
              </div>
            </div>

          </div>

          <div className="mdl-cell mdl-cell--6-col">
            <div className="mdl-card mdl-shadow--2dp">

              <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">Frameworks & Libraries</h2>
              </div>

              <div className="mdl-card__supporting-text">

                <ul className="demo-list-control mdl-list">

                  <li className="mdl-list__item mdl-list__item--two-line">
                    <a href="https://www.getmdl.io/" className="mdl-list__item-primary-content">
                      <span><i className="material-icons spaceRight">link</i> Material Design Lite</span>
                      <span className="mdl-list__item-sub-title">www.getmdl.io</span>
                    </a>
                  </li>

                  <li className="mdl-list__item mdl-list__item--two-line">
                    <a href="https://facebook.github.io/react/" className="mdl-list__item-primary-content">
                      <span><i className="material-icons spaceRight">link</i> ReactJS</span>
                      <span className="mdl-list__item-sub-title">facebook.github.io/react</span>
                    </a>
                  </li>

                  <li className="mdl-list__item mdl-list__item--two-line">
                    <a href="https://facebook.github.io/flux/docs/overview.html" className="mdl-list__item-primary-content">
                      <span><i className="material-icons spaceRight">link</i> Flux</span>
                      <span className="mdl-list__item-sub-title">facebook.github.io/flux/docs/overview.html</span>
                    </a>
                  </li>

                  <li className="mdl-list__item mdl-list__item--two-line">
                    <a href="https://github.com/reactjs/react-router" className="mdl-list__item-primary-content">
                      <span><i className="material-icons spaceRight">link</i> Flux</span>
                      <span className="mdl-list__item-sub-title">github.com/reactjs/react-router</span>
                    </a>
                  </li>

                </ul>

              </div>
            </div>
          </div>

          <div className="mdl-cell mdl-cell--6-col">
            <div className="mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">Assets</h2>
              </div>

              <ul className="demo-list-control mdl-list">

                <li className="mdl-list__item mdl-list__item--two-line">
                  <a href="http://instantlogosearch.com/?q=nasa" className="mdl-list__item-primary-content">
                    <span><i className="material-icons spaceRight">link</i> Nasa Logo</span>
                    <span className="mdl-list__item-sub-title">instantlogosearch.com</span>
                  </a>
                </li>

                <li className="mdl-list__item mdl-list__item--two-line">
                  <a href="https://design.google.com/icons/" className="mdl-list__item-primary-content">
                    <span><i className="material-icons spaceRight">link</i> MDL Icon Font</span>
                    <span className="mdl-list__item-sub-title">design.google.com/icons</span>
                  </a>
                </li>

                <li className="mdl-list__item mdl-list__item--two-line">
                  <a href="https://www.google.com/fonts/specimen/Roboto/" className="mdl-list__item-primary-content">
                    <span><i className="material-icons spaceRight">link</i> Roboto</span>
                    <span className="mdl-list__item-sub-title">google.com/fonts/specimen/Roboto</span>
                  </a>
                </li>

                <li className="mdl-list__item mdl-list__item--two-line">
                  <a href="http://hdphonewallpapers.com/galaxy-s4/wallpaper/cartoon-shuttle-launch" className="mdl-list__item-primary-content">
                    <span><i className="material-icons spaceRight">link</i> Shuttle Launch</span>
                    <span className="mdl-list__item-sub-title">hdphonewallpapers.com/galaxy-s4/wallpaper/cartoon-shuttle-launch</span>
                  </a>
                </li>

              </ul>

            </div>
          </div>

        </div>

      </div>;
    }
  });

});

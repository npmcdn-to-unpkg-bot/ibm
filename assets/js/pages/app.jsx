define([
  'react', 'react-router',
  'components/mdl/Header', 'components/mdl/Drawer',
  'utility/helpers'
], function (
  React, Router,
  Header, Drawer,
  helpers
) {

  return React.createClass({

    componentDidUpdate: function () { if (componentHandler) { componentHandler.upgradeDom(); } },

    // NOTE: You CANNOT USE MDL classes on the ROOTDOM element that ReactRouter is binding too...
    // the app will still work but you will throw an error on page transitions because MDL is manipulating the ROOTDOM node. So this is a No No.  You must also render the mdl-layout__content or MDL will throw an error.

    render: function () {

      return <div>

        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">

          <Header />

          <Drawer />

          <main className="mdl-layout__content">

            <Router.RouteHandler />

          </main>

        </div>

      </div>;

    }

  });

});

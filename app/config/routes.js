var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
//var IndexRoute = ReactRouter.IndexRoute;

var TwigContainer = require('../containers/TwigContainer');

var routes = (
 <Router history={hashHistory}>
   <Route path= '/' component={TwigContainer} />
 </Router>
);

module.exports = routes;

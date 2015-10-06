'use strict';

var React = require('react');
var Router = require('react-router');


var Pixels = require('./sections/pixels/index.jsx'); 

//Needed for React Developer Tools
window.React = React;

var App = React.createClass({
	render: function(){
		return (
			<div>
				<Pixels />
			</div>
		)
	}
});


React.render(<App/>, document.getElementById('app'));


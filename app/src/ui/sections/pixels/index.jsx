'use strict';

var React  = require('react/addons');

var Grid = require('../../components/grid/index.jsx'); 

var Pixel = React.createClass({

    render: function() {
    	return (
    		<div>
    			<div id='pixel-container'>
    				<Grid />
    			</div>
    		</div>
    	)
    }
});

module.exports = Pixel;
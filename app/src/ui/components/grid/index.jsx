'use strict';

var React  = require('react/addons');

var Picker = require('../picker/index.jsx'); 

var Grid = React.createClass({
	getInitialState: function(){
		return {
			colors: [],
			r: '255',
			g: '0',
			b: '0'
		}
	},
	componentWillMount: function(){
		this.generateColors();
	},
	generateColors: function(){
		this.colors = new Array(32);
		for(var i = 0; i < 32; i++)
    	{
    		this.colors[i] = new Array(32);

    		for(var ii = 0; ii < 32; ii++)
    		{
    			this.colors[i][ii] = "0,0,0";
    		}
    	}
	},
	changeColor: function(rN,gN,bN){
		this.setState({
			r: rN,
			g: gN,
			b: bN
		});
	},
	updateColor: function(x,y){
		var temp = this.colors;
		temp[x][y] = this.state.r + "," + this.state.g + "," + this.state.b;
		this.setState({
			colors: temp
		});

	},
    render: function() {
    	var countOuter = 0;
		var countInner = 0;
    	var _ = this;
    	var outer = this.colors.map(function(key){
    		countInner = 0;
    		var inner = _.colors[countOuter].map(function(key2){
    			countInner++;
    			return (
    				<td onClick={_.updateColor.bind(_, countOuter, countInner - 1)}  style={{backgroundColor: "rgb(" + _.colors[countOuter][countInner - 1] + ")"}}></td>
    			)

    		});
    		countOuter++;
    		return (
    			<tr>{inner}</tr>
    		)
    	});
      return (
      	<div>
	        <table>
	        	{outer}
	        </table>

	        <Picker changeColor={this.changeColor}/>
	    </div>
      );
    }
});

module.exports = Grid;
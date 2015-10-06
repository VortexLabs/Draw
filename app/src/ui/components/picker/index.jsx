'use strict';

var React  = require('react/addons');

var Picker = React.createClass({
	getInitialState: function(){
		return {
			r: '255',
			g: '0',
			b: '0'
		}
	},
	updateColor: function(){
		var r1 = document.getElementById('red').value;
		var g1 = document.getElementById('green').value;
		var b1 = document.getElementById('blue').value;
		this.setState({
			r: r1,
			g: g1,
			b: b1
		});

		this.props.changeColor(this.state.r, this.state.g, this.state.b);
	},

    render: function() {
    	var _ = this;
    	return (
    		<div className='colorPicker'>
    			<label>R</label><input type="range" id='red' min='0' max='255' onChange={_.updateColor}/>
    			<label>G</label><input type="range" id='green' min='0' max='255' onChange={_.updateColor}/>
    			<label>B</label><input type="range" id='blue' min='0' max='255' onChange={_.updateColor}/>
    			<div style={{backgroundColor: "rgb(" + _.state.r + "," + _.state.g + "," + _.state.b + ")"}} className='colorPreview'></div>
    		</div>
    	)
    }
});

module.exports = Picker;
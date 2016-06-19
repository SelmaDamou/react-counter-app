"use strict";

var Counter = React.createClass( {
	getInitialState: function() {
		return {
			counter: 42
		}
	},
	render: function () {
		return (
			<div>
				<h2>{this.state.counter}</h2>
				<button>Increment</button>
				<button>Decrement</button>
			</div>
		);
	}
} );

ReactDOM.render( <Counter />, document.getElementById( 'mountpoint' ) );
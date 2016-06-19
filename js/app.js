"use strict";

var Counter = React.createClass( {
	getInitialState: function () {
		return {
			counter: 0
		}
	},
	increment: function () {
		this.setState( {
			counter: this.state.counter + 1
		} );
	},
	decrement: function () {
		this.setState( {
			counter: this.state.counter - 1
		} );
	},
	render: function () {
		return (
			<div>
				<h2>{this.state.counter}</h2>
				<button onClick={this.increment}>Increment</button>
				<button onClick={this.decrement}>Decrement</button>
			</div>
		);
	}
} );

ReactDOM.render( <Counter />, document.getElementById( 'mountpoint' ) );
"use strict";

console.log( "A simple counter" );

var Counter = React.createClass( {
	render: function () {
		return <p>Hello I'm a counter created with React</p>
	}
} );

ReactDOM.render( <Counter />, document.getElementById( 'mountpoint' ) );
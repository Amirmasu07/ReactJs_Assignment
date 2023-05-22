import React, { Component } from 'react';

class FunctionalCompoQone extends Component {

    constructor(props) {
		super(props);
		this.state = {
			count: 0
		};

		this.setCount = this.setCount.bind(this);
	}

	setCount() {
		this.setState({count: this.state.count + 1});
	}

	render() {
		return (
			<div>
				<h1>Add Nomber :</h1>
				<button onClick={this.setCount}>Click to add</button>
				<p>Count: {this.state.count}</p>
			</div>
		)
	}
}

export default FunctionalCompoQone;

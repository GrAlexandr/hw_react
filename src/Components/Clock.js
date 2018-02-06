import React, { Component } from 'react';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {}
		this.state.currentTime = (new Date()).toLocaleString()
	}

	timeKeeper () {
		this.setState({
			currentTime: (new Date()).toLocaleString()
		})
	}

	componentDidMount() {
		this.timerId = setInterval(() => {
			this.timeKeeper()
		}, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.timerId)
	}

	render() {
		return (
			<div className='current-time'>
				{this.state.currentTime}
			</div>
		);
	}
}

export default Clock;
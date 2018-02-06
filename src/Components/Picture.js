import React, { Component } from 'react';

class Picture extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className='picture' style={{backgroundImage: `url(${this.props.url})`}}>
					<h3>{this.props.num}</h3>
				</div>
			</div>
		);
	}
}

export default Picture;
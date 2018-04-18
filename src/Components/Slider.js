import React, { Component } from 'react';
import Picture from './Picture';

class Slider extends Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.state.counter = 0;
		this.state.pictures = [
				{
					num: 'first',
					url: 'http://i.huffpost.com/gen/1881487/thumbs/o-OSLO-900.jpg?1',
				},
				{
					num: 'second',
					url: 'http://i.huffpost.com/gen/1865743/thumbs/o-RIGA-900.jpg?5',
				},
				{
					num: 'third',
					url: 'http://i.huffpost.com/gen/1878201/thumbs/o-STOCKHOLM-900.jpg?1',
				},
				{
					num: 'fourth',
					url: 'http://i.huffpost.com/gen/1878650/thumbs/o-COPENHAGEN-900.jpg?1',
				},
				{
					num: 'fifth',
					url: 'http://i.huffpost.com/gen/1878792/thumbs/o-BUDAPEST-900.jpg?1'
				},
				{
					num: 'sixth',
					url: 'http://i.huffpost.com/gen/1881536/thumbs/o-CESKY-KRUMLOV-900.jpg?1'
				}
			];

		this.pictureLeft = this.pictureLeft.bind(this);
		this.pictureRight = this.pictureRight.bind(this);
	}

	pictureLeft () {
		if (this.state.counter > 0) {
			this.setState({counter: this.state.counter - 1})
		} else {
			this.setState({counter: this.state.pictures.length - 1})
		}
	}

	pictureRight () {
		if (this.state.counter < this.state.pictures.length - 1) {
			this.setState({counter: this.state.counter + 1})
		} else {
			this.setState({counter: 0})
		}
	}

	componentDidMount() {
		this.timerId = setInterval(() => {
			this.pictureRight();
		}, this.props.scrollTime)
	}

	componentWillUnmount() {
		clearInterval(this.timerId)
	}

	render() {
		return (
			<div className='slider'>
				<div className='slider-left'>
					<input type="button" onClick={this.pictureLeft} value="&#x00AB;" />
				</div>
				<div className='slider-right'>
					<input type="button" onClick={this.pictureRight} value="&#x00BB;" />
				</div>

				{this.state.pictures.map( (elem, i) => {
					if(i === this.state.counter) {
						return (
							<Picture
							url={elem.url}
							num={elem.num}
							key={i}
							/>
						)
					}
				})
				}
			</div>
		);
	}
}

export default Slider;
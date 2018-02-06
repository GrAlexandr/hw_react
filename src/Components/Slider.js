import React, { Component } from 'react';
import Picture from './Picture';

class Slider extends Component {
	constructor(props) {
		super(props);

		this.state = {}
		this.state.counter = 0
		this.state.pictures = [
				{
					num: 'first',
					url: 'https://blogoblog.com.ua/uploads/posts/2017-05/1494962478_krasivaya-priroda-oboi-na-rabochij-stol.jpg',
				},
				{
					num: 'second',
					url: 'https://blogoblog.com.ua/uploads/posts/2017-05/1494962609_krasivejshie-oboi-na-rabochij-stol-priroda-zima.jpg',
				},
				{
					num: 'third',
					url: 'https://blogoblog.com.ua/uploads/posts/2017-05/1494962606_krasivye-oboi-priroda-letom-dlya-rabochego-stola.jpg',
				},
				{
					num: 'fourth',
					url: 'https://blogoblog.com.ua/uploads/posts/2017-05/1494962581_krasivye-oboi-na-rabochij-stol-priroda-more.jpg',
				},
				{
					num: 'fifth',
					url: 'https://blogoblog.com.ua/uploads/posts/2017-05/1494962591_krasivye-oboi-na-rabochij-stol-priroda.jpg'
				},
				{
					num: 'sixth',
					url: 'https://blogoblog.com.ua/uploads/posts/2017-05/1494962575_krasivye-oboi-priroda-besplatno.jpg'
				}
			]

		this.pictureLeft = this.pictureLeft.bind(this)
		this.pictureRight = this.pictureRight.bind(this)
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
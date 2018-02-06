import React, { Component } from 'react';
import Clock from "./Components/Clock";
import Slider from './Components/Slider';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
					<Clock />
					<Slider scrollTime={3000} />
					<Slider scrollTime={2000} />
			</div>
		);
	}
}

export default App;
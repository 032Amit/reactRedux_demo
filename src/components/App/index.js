import React, { Component } from 'react';
import './index.css';
import Dashboard from '../Dashboard'

class App extends Component {
	async componentDidMount() {
		const { loadCourseDetails } = this.props
		await loadCourseDetails()
		console.log(this.props)
	}

	render() {
		const { courseDetails } = this.props
		return (
			courseDetails && (
				<div className="App">
					<Dashboard courseData={this.props} />
				</div>
			)
		);
	}
}

export default App;

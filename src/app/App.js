import React, { Component } from 'react'
import Header from '../header/Header'
import Month from '../month/Month'
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			dateArray: []
		}
	}

	componentDidMount() {
		let dates = [...Array(31 + 1).keys()] //hard coded to 31 days for now, would grab number of days in each month with more time
		dates.shift()

		let datesArray = dates.map((date, i) => Object.assign({}, { date: i + 1 }))

		console.log(datesArray)
		this.setState({
			dateArray: datesArray
		})
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Month days={this.state.dateArray} />
			</div>
		)
	}
}

export default App

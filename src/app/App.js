import React, { Component } from 'react'
import Header from '../header/Header'
import Month from '../month/Month'
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.handleSubmit = this.handleSubmit.bind(this)
		this.saveEvent = this.saveEvent.bind(this)
		this.state = {
			dateArray: [],
			month: '' || 'October' //hardcoded to start
		}
	}

	handleSubmit(e) {
		if (e.keyCode === 13) {
			this.setState({
				month: e.target.value
			})
		}
	}

	saveEvent(obj) {
		console.log('event obj', obj)
		let dateObj = this.state.dateArray.filter(dateObj => dateObj.date === obj.date)
		Object.assign(dateObj, obj)
		this.setState({
			dateArray: [...this.state.dateArray]
		})
	}

	componentDidMount() {
		let dates = [...Array(31 + 1).keys()] //hard coded to 31 days for now, would grab number of days in each month with more time
		dates.shift()

		let datesArray = dates.map((date, i) => Object.assign({}, { date: i + 1 }))

		this.setState({
			dateArray: datesArray
		})
	}

	render() {
		return (
			<div className="App">
				<Header handleSubmit={this.handleSubmit} dayArray={this.state.dateArray} saveEvent={this.saveEvent} />
				<Month days={this.state.dateArray} month={this.state.month} />
			</div>
		)
	}
}

export default App

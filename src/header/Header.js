import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Header.css'

class Header extends Component {
	constructor() {
		super()
		this.handleSearchChange = this.handleSearchChange.bind(this)
		this.handleEventChange = this.handleEventChange.bind(this)
		this.sendEvent = this.sendEvent.bind(this)
		this.state = {
			searchInput: '',
			eventInput: '',
			eventTime: '',
			eventDay: ''
		}
	}

	handleSearchChange(e) {
		this.setState({
			searchInput: e.target.value
		})
	}

	handleEventChange(e) {
		this.setState({
			eventInput: e.target.value
		})
	}

	sendEvent() {
		this.props.saveEvent({ date: this.state.eventDay, time: this.state.eventTime, title: this.state.eventInput })
	}

	render() {
		const dates = Object.keys(this.props.dayArray)
		dates.shift()
		dates.push(31) //hardcoded and hacky, running out of time!
		const dateOptions = dates.map((date, i) => <option key={i}>{date}</option>)

		const hoursArray = [...Array(25).keys()]
		hoursArray.shift()

		const hourSelect = hoursArray.map((hour, i) => (
			<option key={i} value={hour}>
				{hour}
			</option>
		))

		return (
			<div>
				<section className="header">
					<div className="left-side">
						<h3 className="calendars">Calendars</h3>
					</div>
					<div className="view-selector">
						<h3 className="day">Day</h3>
						<h3>Week</h3>
						<h3>Month</h3>
						<h3 className="year">Year</h3>
					</div>
					<input
						onChange={this.handleSearchChange}
						onKeyDown={e => this.props.handleSubmit(e)}
						className="search-input"
						placeholder="Search Month"
						value={this.props.searchInput}
					/>
				</section>
				<section className="add-event">
					<select className="day-select">
						<option>Day</option>
						{dateOptions}
					</select>
					<input
						className="event-input"
						onChange={this.handleEventChange}
						value={this.props.eventInput}
						placeholder="Event Title"
					/>
					<select className="time-select">{hourSelect}</select>
					<button className="save-event-btn" onClick={this.sendEvent}>
						Add Event
					</button>
				</section>
			</div>
		)
	}
}

Header.propTypes = {
	handleChange: PropTypes.func,
	input: PropTypes.string
}

export default Header

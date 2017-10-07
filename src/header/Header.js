import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Header.css'

class Header extends Component {
	constructor() {
		super()
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.state = {
			input: ''
		}
	}

	handleChange(e) {
		this.setState({
			input: e.target.value
		})
	}

	handleSubmit(e) {
		if (e.keyCode === 13) {
			console.log(this.state.input)
		}
	}

	render() {
		return (
			<section className="header">
				<h3 className="calendars">Calendars</h3>
				<div className="view-selector">
					<h3 className="day">Day</h3>
					<h3>Week</h3>
					<h3>Month</h3>
					<h3 className="year">Year</h3>
				</div>
				<input
					onChange={this.handleChange}
					onKeyDown={this.handleSubmit}
					className="search-input"
					placeholder="[{}, {}]"
					value={this.props.input}
				/>
			</section>
		)
	}
}

Header.propTypes = {
	handleChange: PropTypes.func,
	input: PropTypes.string
}

export default Header

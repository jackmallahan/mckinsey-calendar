import React, { Component } from 'react'
import Day from '../day/Day'
import './Month.css'

const Month = ({ days, month }) => {
	let dayCards = days.map((day, i) => <Day date={day.date} key={i} />)
	return (
		<div className="Month">
			<header className="Month-header">
				<h1 className="Month-title">{month}</h1>
			</header>
			<div className="day-headers">
				<span>Sunday</span>
				<span>Monday</span>
				<span>Tuesday</span>
				<span>Wednesday</span>
				<span>Thursday</span>
				<span>Friday</span>
				<span>Saturday</span>
			</div>
			<section className="day-container">{dayCards}</section>
		</div>
	)
}

export default Month

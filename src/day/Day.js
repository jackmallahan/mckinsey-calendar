import React, { Component } from 'react'
import './Day.css'

const Day = ({ date }) => {
	return (
		<article className="day-card">
			<h5>{date}</h5>
			<div className="events">events</div>
		</article>
	)
}

export default Day

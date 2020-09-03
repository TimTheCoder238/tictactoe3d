import React from 'react'
import './css/squarre.style.min.css'

export default function Squarre(props) {
	let btnClass = 'squarre'

	// if (props.isNotDraw) {
		if (props.lastPos.length === props.size && !props.is3d) {
			props.lastPos.map((lastpos) => {
				if (props.index === lastpos) {
					btnClass = 'victory'
				}
				return btnClass
			})
		}
		else {
			btnClass = 'squarre'
		}

		if(!props.isNotDraw) {
			btnClass = 'squarre squarre-draw'
		}
	

	return (
		<button
			onClick={(e) => props.handleChange(props.index)}
			index={props.index}
			className={btnClass}
		>
			{props.value}
		</button>
	)
}

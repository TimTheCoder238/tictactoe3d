import React from 'react'
import Board from './board/Board'
import Travel from './travel/Travel'
import './css/container.style.min.css'

export default function Container(props) {
	return (
		<div className='container'>
			<div className='container-board'>
				<Board
					state={props.state}
					setState={props.setState}
					handleChange={props.handleChange}
					size={props.size}
					updateSize={props.updateSize}
					setupdateSize={props.setupdateSize}
				/>
			</div>
			<div className='container-travel'>
				<Travel history1={props.state.boards1} history2={props.state.boards2} history3={props.state.boards3} jumpTo={props.jumpTo} updateSize={props.updateSize} setupdateSize={props.setupdateSize} />
			</div>
		</div>
	)
}

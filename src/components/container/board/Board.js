import React from 'react'
import Squarre from './squarre/Squarre'
import Select from './../select/Select'
import './css/board.style.min.css'

export default function Board(props) {
	let element1 = <p></p>
	let element2 = <p></p>
	let element3 = <p></p>
	let element4 = <p>Hello</p>

	React.useEffect(() => {
		console.log('Board Mounted')
		// console.log(props.state.isNotDraw1)
		// console.log(props.state.isNotDraw2)
		// console.log(props.state.isNotDraw3)
		
		
	})
	//3X3
	// Definit une classe name pour le button
	if (props.state.isFinished1 && props.state.isNotDraw1) {
		element1 = (
			<p className='winner title'>Winner: {props.state.isX1 ? 'O' : 'X'}</p>
		)
		//Update button classname en cas de victoire
		// props.state.lastPosition
	} else if (
		!props.state.isNotDraw1
	) {
		element1 = <p className='draw title'>Draw</p>
	} else if (!props.state.isFinished1 && props.state.isNotDraw1) {
		element1 = (
			<p className='title'>
				Current Player: <span  className={props.state.isX1 ? 'xplay' : 'oplay'}>{props.state.isX1 ? 'X' : 'O'}</span>
			</p>
		)
	}

	//4X4
	// Definit une classe name pour le button
	if (props.state.isFinished2 && props.state.isNotDraw2) {
		element2 = (
			<p className='winner title'>Winner: {props.state.isX2 ? 'O' : 'X'}</p>
		)
		//Update button classname en cas de victoire
		// props.state.lastPosition
	} else if (
		!props.state.isNotDraw2
	) {
		element2 = <p className='draw title'>Draw</p>
	} else if (!props.state.isFinished2 && props.state.isNotDraw2) {
		element2 = (
			<p className='title'>
				Current Player: <span  className={props.state.isX2 ? 'xplay' : 'oplay'}>{props.state.isX2 ? 'X' : 'O'}</span>
			</p>
		)
	}

	//5X5
	// Definit une classe name pour le button
	if (props.state.isFinished3 && props.state.isNotDraw3) {
		element3 = (
			<p className='winner title'>Winner: {props.state.isX3 ? 'O' : 'X'}</p>
		)
		//Update button classname en cas de victoire
		// props.state.lastPosition
	} else if (
		!props.state.isNotDraw3
	) {
		element3 = <p className='draw title'>Draw</p>
	} else if (!props.state.isFinished3 && props.state.isNotDraw3) {
		element3 = (
			<p className='title'>
				Current Player: <span  className={props.state.isX3 ? 'xplay' : 'oplay'}>{props.state.isX3 ? 'X' : 'O'}</span>
			</p>
		)
	}
	//Check for 3d mode
	let treeD = props.updateSize === 3 && props.state.is3d
	let nottreeD = props.updateSize === 3 && !props.state.is3d

	return (
		<div className='board'>
			<h1 className='board-title'>Tic Tac Toe</h1>
			<p className='board-message'>Super sizer</p>
			<div>
				<Select
					value={props.size}
					updateSize={props.updateSize}
					setupdateSize={props.setupdateSize}
					istreeD={props.state.is3d}
					setState={props.setState}
				/>
			</div>

			{/* board 3X3 */}
			{nottreeD && (
				<div>
					<div className='board-element'>{element1}</div>
					<div className='board-body-3'>
						{props.state.boardCopy1.map((squarre, index) => (
							<Squarre
								key={index + 'bc1'}
								index={index}
								handleChange={props.handleChange}
								value={squarre}
								lastPos={props.state.lastPosition1}
								size={props.updateSize}
								isNotDraw={props.state.isNotDraw1}
								is3d={props.state.is3d}
							/>
						))}
					</div>
				</div>
			)}

			{/* board 3X3 3D */}
			{treeD && (
				<div>
					<div className='board-element'>{element4}</div>
					<div className='board-body-6'>
						{props.state.boardCopy4.map((boards, indexi) => (
							<div key={indexi + 'bc4board'} className='board-body-6-board'>
							{boards.map((squarre, indexj) => 
								<Squarre
								key={indexi + 'bc4'+ indexj}
								index={indexj}
								handleChange={props.handleChange}
								value={squarre}
								lastPos={props.state.lastPosition1}
								size={props.updateSize}
								isNotDraw={props.state.isNotDraw1}
								is3d={props.state.is3d}
							/>
							
							)}
							</div>
						))}
					</div>
				</div>
			)}

			{/* board 4X4 */}
			{props.updateSize === 4 && (
				<div>
					<div className='board-element'>{element2}</div>
					<div className='board-body-4'>
						{props.state.boardCopy2.map((squarre, index) => (
							<Squarre
								key={index + 'bc2'}
								index={index}
								handleChange={props.handleChange}
								value={squarre}
								lastPos={props.state.lastPosition2}
								size={props.updateSize}
								isNotDraw={props.state.isNotDraw2}
								is3d={props.state.is3d}
							/>
						))}
					</div>
				</div>
			)}
			{/* board 5X5 */}
			{props.updateSize === 5 && (
				<div>
					<div className='board-element'>{element3}</div>
					<div className='board-body-5'>
						{props.state.boardCopy3.map((squarre, index) => (
							<Squarre
								key={index + 'bc3'}
								index={index}
								handleChange={props.handleChange}
								value={squarre}
								lastPos={props.state.lastPosition3}
								size={props.updateSize}
								isNotDraw={props.state.isNotDraw3}
								is3d={props.state.is3d}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	)
}

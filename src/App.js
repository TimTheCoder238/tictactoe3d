import React, { useState } from 'react'
import './css/app.style.min.css'
import Container from './components/container/Container'
import checkpossibilities from './checkpossibilities'
import checkWinner from './checkwinner'

function App() {
	let size = 3
	const [state, setState] = useState({
		boards1: [
			{
				board: Array(size * size).fill(null),
			},
		],
		boards2: [
			{
				board: Array((size + 1) * (size + 1)).fill(null),
			},
		],
		boards3: [
			{
				board: Array((size + 2) * (size + 2)).fill(null),
			},
		],
		boards4: [
			{
				board: [Array((size) * (size)).fill(null),Array((size) * (size)).fill(null),Array((size) * (size)).fill(null),]
			},
		],
		isX1: true,
		isX2: true,
		isX3: true,
		isX4: true,
		isFinished1: false,
		isFinished2: false,
		isFinished3: false,
		isFinished4: false,
		stepNumber1: 0,
		stepNumber2: 0,
		stepNumber3: 0,
		stepNumber4: 0,
		boardCopy1: Array(size * size).fill(null),
		boardCopy2: Array((size + 1) * (size + 1)).fill(null),
		boardCopy3: Array((size + 2) * (size + 2)).fill(null),
		boardCopy4: [Array((size) * (size)).fill(null),Array((size) * (size)).fill(null),Array((size) * (size)).fill(null),],
		lastPosition1: [],
		lastPosition2: [],
		lastPosition3: [],
		lastPosition4: [],
		isNotDraw1: true, 
		isNotDraw2: true,
		isNotDraw3: true,
		isNotDraw4: true,
		is3d: false

	})

	//Set the selected size on menu
	const [updateSize, setupdateSize] = useState(size)

	React.useEffect(() => {
		console.log('IN USEEFFECT')
	
		
		let boardsCopy = []
		let currentFBoard = []
		let lastPosition = []
		let possibilities = true
		switch (updateSize) {
			case 3:
				if(!state.is3d){
				// console.log('///state.boards1///')
				// console.log(state.boards1.length)
				// console.log('///stepNumber1///')
				// console.log(state.stepNumber1)
				//Timetravel and navigating through different sizes causes
				//the block to be gold even if not in last position
				if(state.boards1.length-1 === state.stepNumber1){
					
				boardsCopy = state.boards1.slice()
				currentFBoard = boardsCopy[boardsCopy.length - 1]
				possibilities = checkpossibilities(currentFBoard.board, updateSize)
				console.log('on est dans cas 3 et le test est: '+possibilities)
				
				lastPosition = checkWinner(currentFBoard.board, updateSize)
				// console.log(lastPosition)
				if (lastPosition) {
					setState((prev) => ({
						...prev,
						isFinished1: true,
						lastPosition1: lastPosition,
					}))
				}
				if (!possibilities) {
					setState((prev) => ({
						...prev,
						isNotDraw1: possibilities,
						isFinished1: true,
					}))
				}
			}
			}else {
				console.log('hello 3D checks L103')
				//Cas 3D
			}
				break
			case 4:
				// console.log('///state.boards2///')
				// console.log(state.boards2.length)
				// console.log('///stepNumber2///')
				// console.log(state.stepNumber2)

				if(state.boards2.length-1 === state.stepNumber2){
				boardsCopy = state.boards2.slice()
				currentFBoard = boardsCopy[boardsCopy.length - 1]
				possibilities = checkpossibilities(currentFBoard.board, updateSize)
				// console.log('on est dans cas 4 et le test est: '+possibilities)
				lastPosition = checkWinner(currentFBoard.board, updateSize)
				// console.log(lastPosition)
				if (lastPosition) {
					setState((prev) => ({
						...prev,
						isFinished2: true,
						lastPosition2: lastPosition,
					}))
				}
				if (!possibilities) {
					setState((prev) => ({
						...prev,
						isNotDraw2: possibilities,
						isFinished2: true,
					}))
				}
			}
				break
			case 5:
				// console.log('///state.boards3///')
				// console.log(state.boards3.length)
				// console.log('///stepNumber3///')
				// console.log(state.stepNumber3)

				if(state.boards3.length-1 === state.stepNumber3){
				boardsCopy = state.boards3.slice()
				currentFBoard = boardsCopy[boardsCopy.length - 1]
				possibilities = checkpossibilities(currentFBoard.board, updateSize)
				// console.log('on est dans cas 5 et le test est: '+possibilities)
				lastPosition = checkWinner(currentFBoard.board, updateSize)
				if (lastPosition) {
					setState((prev) => ({
						...prev,
						isFinished3: true,
						lastPosition3: lastPosition,
					}))
				}
				if (!possibilities) {
					setState((prev) => ({
						...prev,
						isNotDraw3: possibilities,
						isFinished3: true,
					}))
				}
			}
				break
			default:
				break
		}
	
	}, [state.boards1, state.boards2, state.boards3, updateSize, size, setState,state.stepNumber1, state.stepNumber2, state.stepNumber3])

	//travel component change
	const jumpTo = (i) => {
		let boardsCopy = []
		let currentFBoard = []
		let currentFBoardCopy = []
		// console.log('lastposition')
		// console.log(state.lastPosition1)
		// console.log(state.lastPosition2)
		// console.log(state.lastPosition3)
		// console.log(updateSize)
		
		switch (updateSize) {
			case 3:
				if(!state.is3d){
				boardsCopy = state.boards1.slice()
				// // //Copie le dernier board du boards
				currentFBoard = boardsCopy[i]
				// console.log(currentFBoard)
				currentFBoardCopy = currentFBoard.board.slice()

				setState((prev) => ({
					...prev,
					stepNumber1: i,
					isX1: i % 2 === 0,
					boardCopy1: currentFBoardCopy.slice(),
					lastPosition1: [],
					isNotDraw1: true,
					isFinished1: false,
				}))
			}else {
				console.log('hello 3D jumps L200')
				//Cas 3D
			}
				break
			case 4:
				boardsCopy = state.boards2.slice()
				// // //Copie le dernier board du boards
				currentFBoard = boardsCopy[i]
				// console.log(currentFBoard)
				currentFBoardCopy = currentFBoard.board.slice()

				setState((prev) => ({
					...prev,
					stepNumber2: i,
					isX2: i % 2 === 0,
					boardCopy2: currentFBoardCopy.slice(),
					lastPosition2: [],
					isNotDraw2: true,
					isFinished2: false,
				}))
				break
			case 5:
				boardsCopy = state.boards3.slice()
				// // //Copie le dernier board du boards
				currentFBoard = boardsCopy[i]
				// console.log(currentFBoard)
				currentFBoardCopy = currentFBoard.board.slice()

				setState((prev) => ({
					...prev,
					stepNumber3: i,
					isX3: i % 2 === 0,
					boardCopy3: currentFBoardCopy.slice(),
					lastPosition3: [],
					isNotDraw3: true,
					isFinished3: false,
				}))
				break
			default:
				break
		}

		// console.log(currentFBoardCopy)
		// console.log(state.stepNumber1)
		// console.log(state.isX1)
		// console.log(state.boards1)
	}

	//Handle button change
	const handleChange = (index) => {
		// //Copie tout le boards
		let boardsCopy = []
		let currentFBoard = []
		let currentFBoardCopy = []
		let value = ''
		switch (updateSize) {
			case 3:
				if(!state.is3d){
				console.log('cas 1')

				boardsCopy = state.boards1.slice(0, state.stepNumber1 + 1)
				currentFBoard = boardsCopy[boardsCopy.length - 1]
				currentFBoardCopy = currentFBoard.board.slice()
				if (state.isFinished1 || currentFBoardCopy[index]) {
					return
				}
				value = state.isX1 ? 'X' : 'O'
				currentFBoardCopy[index] = value
				setState((currentCount) => ({
					...currentCount,
					boards1: boardsCopy.concat([
						{
							board: currentFBoardCopy,
						},
					]),
					isX1: !currentCount.isX1,
					stepNumber1: boardsCopy.length,
					boardCopy1: currentFBoardCopy.slice(),
				}))
			}else {
					console.log('hello 3D changes L280')
					//Cas 3D
				}
				break
			case 4:
				console.log('cas 2')
				boardsCopy = state.boards2.slice(0, state.stepNumber2 + 1)
				currentFBoard = boardsCopy[boardsCopy.length - 1]
				currentFBoardCopy = currentFBoard.board.slice()
				if (state.isFinished2 || currentFBoardCopy[index]) {
					return
				}
				value = state.isX2 ? 'X' : 'O'
				currentFBoardCopy[index] = value
				setState((currentCount) => ({
					...currentCount,
					boards2: boardsCopy.concat([
						{
							board: currentFBoardCopy,
						},
					]),
					isX2: !currentCount.isX2,
					stepNumber2: boardsCopy.length,
					boardCopy2: currentFBoardCopy.slice(),
				}))
				break
			case 5:
				console.log('cas 3')
				boardsCopy = state.boards3.slice(0, state.stepNumber3 + 1)
				currentFBoard = boardsCopy[boardsCopy.length - 1]
				currentFBoardCopy = currentFBoard.board.slice()
				if (state.isFinished3 || currentFBoardCopy[index]) {
					return
				}
				value = state.isX3 ? 'X' : 'O'
				currentFBoardCopy[index] = value
				setState((currentCount) => ({
					...currentCount,
					boards3: boardsCopy.concat([
						{
							board: currentFBoardCopy,
						},
					]),
					isX3: !currentCount.isX3,
					stepNumber3: boardsCopy.length,
					boardCopy3: currentFBoardCopy.slice(),
				}))
				break
			default:
				break
		}
		// console.log(currentFBoardCopy)
		// console.log(state.stepNumber1)
		// console.log(state.isX1)
		// console.log(state.boards1)
	}

	return (
		<div className='app'>
			<Container
				state={state}
				setState={setState}
				handleChange={handleChange}
				jumpTo={jumpTo}
				size={size}
				updateSize={updateSize}
				setupdateSize={setupdateSize}
			/>
		</div>
	)
}

export default App

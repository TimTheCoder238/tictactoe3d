import React from 'react'
import './css/travel.style.min.css'

export default function Travel(props) {

	const handleClick = (index) => {
		//Récupère l'index
		//En fonction nde l'index et du tableau 3x3 ou 4x4
		//Récupère l'id
		// let id = index+'3x3'+props.updateSize
		// console.log(document.getElementById(id))
		switch (props.updateSize) {
			case 3:
				for (let i = 0; i < props.history1.length-1; i++) {
					let id = i+'3x3'+props.updateSize
					if(i === index){
						document.getElementById(id).className = 'travel-li-s'
					} else {
						document.getElementById(id).className = 'travel-li'
					}
				}
				break
			case 4:
				for (let i = 0; i < props.history2.length-1; i++) {
					let id = i+'4x4'+props.updateSize
					if(i === index){
						document.getElementById(id).className = 'travel-li-s'
					} else {
						document.getElementById(id).className = 'travel-li'
					}
				}
				break
			case 5:
				for (let i = 0; i < props.history3.length-1; i++) {
					let id = i+'5x5'+props.updateSize
					if(i === index){
						document.getElementById(id).className = 'travel-li-s'
					} else {
						document.getElementById(id).className = 'travel-li'
					}
				}
				break

			default:
				break
		}
		props.jumpTo(index)
	}

	

	// useEffect(() => {
	// 	console.log('Travel Mounted')
	// 	console.log(props.history1)
	// 	console.log(props.history2)
	// 	console.log(props.history3)

	// }, [])

	return (
		<div className='travel'>
			<p className='travel-title'>Time Machine</p>
			{/* 3X3 */}
			{props.updateSize === 3 && (
				<ul>
					{props.history1.map((arr, index) => {
						return props.history1.length - 1 === index ? 
						null
						: (
							<li
							key={index + '3x3'+ props.updateSize}
							id={index + '3x3'+ props.updateSize}
							onClick={() => handleClick(index)}
							className='travel-li'
							>
								{index === 0 ? 'Start' : `Go To Step ${index}`}
							</li>
						)
					})}
				</ul>
			)}
			{/* 4X4 */}
			{props.updateSize === 4 && (
				<ul>
					{props.history2.map((arr, index) => {
						return props.history2.length - 1 === index ? null : (
							<li
							key={index + '4x4'+ props.updateSize}
							id={index + '4x4'+ props.updateSize}
							onClick={() => handleClick(index)}
							className='travel-li'
							>
								{index === 0 ? 'Start' : `Go To Step ${index}`}
							</li>
						)
					})}
				</ul>
			)}
			{/* 5X5 */}
			{props.updateSize === 5 && (
				<ul>
					{props.history3.map((arr, index) => {
						return props.history3.length - 1 === index ? null : (
							<li
							key={index + '5x5'+ props.updateSize}
							id={index + '5x5'+ props.updateSize}
							onClick={() => handleClick(index)}
							className='travel-li'
							>
								{index === 0 ? 'Start' : `Go To Step ${index}`}
							</li>
						)
					})}
				</ul>
			)}
		</div>
	)
}

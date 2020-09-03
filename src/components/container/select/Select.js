import React, { useState } from 'react'
import './css/select.style.min.css'
export default function Select(props) {
	const [nameOfClass1, setnameOfClass1] = useState('select-button-s')
	const [nameOfClass2, setnameOfClass2] = useState('select-button')
	const [nameOfClass3, setnameOfClass3] = useState('select-button')
	const [nameOfClass4, setnameOfClass4] = useState('select-button')

	const handleButton1 = () => {
		setnameOfClass4('select-button')
		setnameOfClass1('select-button-s')
		setnameOfClass2('select-button')
		setnameOfClass3('select-button')
		props.setupdateSize(3)
		props.setState((prev) => ({
			...prev,
			is3d: false
		}))
	}

	const handleButton2 = () => {
		setnameOfClass4('select-button')
		setnameOfClass2('select-button-s')
		setnameOfClass1('select-button')
		setnameOfClass3('select-button')
		props.setupdateSize(4)
	}

	const handleButton3 = () => {
		setnameOfClass4('select-button')
		setnameOfClass3('select-button-s')
		setnameOfClass2('select-button')
		setnameOfClass1('select-button')
		props.setupdateSize(5)
	}

	const handleButton4 = () => {
		setnameOfClass4('select-button-s')
		setnameOfClass3('select-button')
		setnameOfClass2('select-button')
		setnameOfClass1('select-button')
		props.setupdateSize(3)
		props.setState((prev) => ({
			...prev,
			is3d: true
		}))
	}
	// let treeD = props.updateSize === 3 && props.is3d
	return (
		<div className='select'>
			<button className={nameOfClass1} onClick={handleButton1}>
				3 in a row
			</button>

			<button className={nameOfClass4} onClick={handleButton4}>
				3 in a row 3D
			</button>

			<button className={nameOfClass2} onClick={handleButton2}>
				4 in a row
			</button>

			<button className={nameOfClass3} onClick={handleButton3}>
				5 in a row
			</button>
		</div>
	)
}

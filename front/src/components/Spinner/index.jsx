import React from 'react'
import SpinnerBootstrap from 'react-bootstrap/Spinner'

import './style.scss'

const Spinner = ({ children }) => {
	return (
		<div className='spinner-overlay'>
			<SpinnerBootstrap animation='border' role='status'>
				<span className='sr-only'>Loading...</span>
			</SpinnerBootstrap>
		</div>
	)
}

export default Spinner
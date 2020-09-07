import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

import './style.scss'

const Navigation = ({ history }) => {
	return (
		<Navbar className='justify-content-between' bg='dark' variant='dark' className='justify-content-between'>
			<Navbar.Brand>Create product form</Navbar.Brand>
			<Button
				onClick={() => {
					history.goBack()
				}}
				variant='outline-info'
			>
				Back
			</Button>
		</Navbar>
	)
}

export default Navigation

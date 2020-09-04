import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Nav from 'react-bootstrap/Nav'

import './style.scss'

const Navigation = () => {
	return (
		<Navbar bg='dark' variant='dark' className='justify-content-between'>
			<Form inline>
				<FormControl type='text' placeholder='Search' className='mr-sm-2' />
				<Button variant='outline-info'>Search</Button>
			</Form>
			<Form inline>
				<Button variant='outline-info mr-sm-2'>+ Add New</Button>
				<Button variant='outline-info filter-button'>
					<img className='filter-button_icon' src='/images/filter.svg' alt='Filter' />
				</Button>
			</Form>
		</Navbar>
	)
}

export default Navigation

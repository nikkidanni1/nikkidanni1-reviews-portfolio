import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

import './style.scss'

const Navigation = ({ searchWord, setSearchWord, onSearch }) => {
	return (
		<Navbar bg='dark' variant='dark' className='justify-content-between'>
			<Form
				inline
				onSubmit={(e) => {
					e.preventDefault()
					onSearch(searchWord)
				}}
			>
				<FormControl
					type='text'
					placeholder='Search'
					className='mr-sm-2'
					value={searchWord}
					onChange={(e) => {
						setSearchWord(e.target.value)
					}}
				/>
				<Button
					variant='outline-info'
					onClick={() => {
						onSearch(searchWord)
					}}
				>
					Search
				</Button>
			</Form>
			<Form inline>
				<Link to='/create-product'>
					<Button variant='outline-info mr-sm-2'>+ Add New Product</Button>
				</Link>
				<Button variant='outline-info filter-button'>
					<img className='filter-button_icon' src='/images/filter.svg' alt='Filter' />
				</Button>
			</Form>
		</Navbar>
	)
}

export default Navigation

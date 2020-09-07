import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import './style.scss'

const Table = ({ products }) => {
	return (
		<div className='products-list'>
			{products.map((item, index) => (
				<Card style={{ width: '18rem' }} key={'product-card-' + index}>
					<Card.Img className='card-img' variant='top' src={`https://reviewsback.vercel.app/photos/${item.photoId}`} />
					<Card.Body>
						<Card.Title>{item.name}</Card.Title>
						<Card.Text>{item.description}</Card.Text>
						<Button variant='primary'>Reviews</Button>
					</Card.Body>
				</Card>
			))}
		</div>
	)
}

export default Table

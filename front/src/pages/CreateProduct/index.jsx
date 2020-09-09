import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'

import Layout from 'components/Layout'
import Navigation from './components/Navigation'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { getTypes, uploadPhoto, setProduct } from 'api'

import './style.scss'

const FILE_SIZE = 5242880

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png']

const schema = yup.object({
	name: yup.string().required(),
	type: yup.string().matches(/[^- Not Selected -]/, { message: 'type is required field' }),
	image: yup
		.mixed()
		.test('fileSize', 'File Size is too large', (value) => {
			return value.size < FILE_SIZE
		})
		.test('fileType', 'Unsupported File Format', (value) => SUPPORTED_FORMATS.includes(value.type)),
})

const CreateProduct = ({ history }) => {
	const [isLoading, setLoading] = useState(false)
	const [trySend, setTrySend] = useState(false)
	const [types, setTypes] = useState(['- Not Selected -'])

	useEffect(() => {
		getTypesByApi()
	}, [])

	const getTypesByApi = async () => {
		setLoading(true)
		const typesByApi = await getTypes()
		setTypes(['- Not Selected -', ...typesByApi])
		setLoading(false)
	}

	const readImage = (image) => {
		return new Promise((resolve) => {
			const reader = new FileReader()
			reader.onload = function () {
				resolve(reader.result)
			}
			reader.readAsArrayBuffer(image)
		})
	}

	const onSubmit = async (values) => {
		const image = await readImage(values.image)
		const photoId = await uploadPhoto(image)
		if (photoId.success) {
			await setProduct({ photoId: photoId.id, name: values.name, description: values.description, type: values.type })
			history.goBack()
		}
	}

	return (
		<Layout loading={isLoading}>
			<Navigation history={history} />
			<Card bg={'dark'} text={'white'} className='mb-2 create-product_form-wrapper'>
				<Formik validationSchema={schema} onSubmit={onSubmit} initialValues={{ name: '', description: '', type: '- Not Selected -' }}>
					{({ handleSubmit, handleChange, setFieldValue, handleBlur, values, touched, isValid, errors }) => (
						<Form>
							<Form.Group controlId='validationFormik01'>
								<Form.Label>Name</Form.Label>
								<Form.Control
									type='text'
									placeholder='Product Name'
									name='name'
									value={values.name}
									onChange={handleChange}
									isInvalid={trySend && !!errors.name}
								/>
								<Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>
							</Form.Group>
							<Form.Group controlId='validationFormik02'>
								<Form.Label>Description</Form.Label>
								<Form.Control
									type='text'
									placeholder='Product Description'
									name='description'
									value={values.description}
									onChange={handleChange}
								/>
							</Form.Group>
							<Form.Group controlId='validationFormik03'>
								<Form.Label>Type</Form.Label>
								<Form.Control
									as='select'
									name='type'
									value={values.type}
									onChange={handleChange}
									isInvalid={trySend && !!errors.type}
								>
									{types.map((item, index) => (
										<option key={'type-' + index}>{item}</option>
									))}
								</Form.Control>
								<Form.Control.Feedback type='invalid'>{errors.type}</Form.Control.Feedback>
							</Form.Group>
							<Form.Group>
								<Form.File
									id='validationFormik04'
									label='Image'
									accept='image/png, image/jpeg'
									name='image'
									onChange={(e) => {
										const file = e.target.files[0]
										setFieldValue('image', file, true)
									}}
									isInvalid={trySend && !!errors.image}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Control isInvalid={trySend && !!errors.image} style={{ display: 'none' }} />
								<Form.Control.Feedback type='invalid'>{errors.image}</Form.Control.Feedback>
							</Form.Group>
							<Button
								variant='outline-info'
								onClick={() => {
									handleSubmit()
									setTrySend(true)
								}}
							>
								Send
							</Button>
						</Form>
					)}
				</Formik>
			</Card>
		</Layout>
	)
}

export default CreateProduct

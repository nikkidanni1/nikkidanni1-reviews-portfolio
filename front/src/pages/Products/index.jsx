import React, { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import Layout from 'components/Layout'
import Table from './components/Table'
import Pagination from 'components/Pagination'

import { getProducts } from 'api'

const PRODUCTS_ON_PAGE = 6

const Products = () => {
	const [loading, setLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [maxPage, setMaxPage] = useState(1)
	const [products, setProducts] = useState([])
	const [searchWord, setSearchWord] = useState('')

	useEffect(() => {
		parceUrl()
	}, [])

	const parceUrl = () => {
		const pageQuery = window.location.search.match(/\?page=\d*/i)
		if (!pageQuery) {
			window.location.search = '?page=1&searchWord='
		}

		const searchWordQuery = window.location.search.match(/&searchWord=[\wА-Яа-я ]*/i)

		if (!searchWordQuery) {
			window.location.search += '&searchWord='
		}

		const word = searchWordQuery[0].replace('&searchWord=', '')
		setSearchWord(word)
		getProductsOnPage(+pageQuery[0].replace('?page=', ''), word)
	}

	const getProductsOnPage = async (page, word = searchWord) => {
		setLoading(true)
		const from = (page - 1) * PRODUCTS_ON_PAGE
		const products = await getProducts({ from, count: PRODUCTS_ON_PAGE, type: '', word })
		setCurrentPage(page)
		setSearchWord(word)
		setMaxPage(
			products.count % PRODUCTS_ON_PAGE === 0
				? Math.trunc(products.count / PRODUCTS_ON_PAGE)
				: Math.trunc(products.count / PRODUCTS_ON_PAGE) + 1
		)
		setProducts(products.data)
		setLoading(false)
	}

	const onChangePage = (page) => {
		window.location.search = window.location.search.replace(/\?page=(\d*)/, `?page=${page}`)
	}

	const onSearch = (word) => {
		window.location.search = window.location.search
			.replace(/\?page=\d*/, '?page=1')
			.replace(/&searchWord=[\wА-Яа-я ]*/, `&searchWord=${word}`)
	}

	return (
		<Layout loading={loading}>
			<Navigation searchWord={searchWord} setSearchWord={setSearchWord} onSearch={onSearch} />
			{!loading && (
				<>
					<Table products={products} />
					<Pagination activePage={currentPage} maxPage={maxPage} onChangePage={onChangePage} />
				</>
			)}
		</Layout>
	)
}

export default Products

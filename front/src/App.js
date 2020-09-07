import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Products from 'pages/Products'
import CreateProduct from 'pages/CreateProduct'

const App = ({ history }) => {
	return (
		<div className='app'>
			<Switch>
				<Route history={history} path='/products' component={Products} />
				<Route history={history} path='/create-product' component={CreateProduct} />
				<Redirect from='/' to='/products' />
			</Switch>
		</div>
	)
}

export default App

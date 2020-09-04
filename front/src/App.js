import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import Products from 'pages/Products'

const App = ({ history }) => {
	return (
		<div className='app'>
			<Switch>
				<Route history={history} path='/products' component={Products} />
				<Redirect from='/' to='/products' />
			</Switch>
		</div>
	)
}

export default App

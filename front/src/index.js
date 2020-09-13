import React from 'react'
import ReactDOM from 'react-dom'

import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createBrowserHistory } from 'history'

import 'bootstrap/dist/css/bootstrap.min.css'

const TYPES = {
	ADD_TYPES: 'ADD_TYPES',
}

function reducer(state = { types: ['- Not Selected -'] }, action) {
	switch (action.type) {
		case TYPES.ADD_TYPES:
			return { ...state, types: action.payload }
		default:
			return state
	}
}

export function addTypes(payload) {
	return { type: TYPES.ADD_TYPES, payload }
}

const store = createStore(reducer)
const history = createBrowserHistory()

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
)

store.subscribe(console.log)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

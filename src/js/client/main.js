import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import rootReducer from '../reducers'

// const history = createBrowserHistory()
const history = createBrowserHistory({ basename: '/american-made' })

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	rootReducer(history),
	composeEnhancer(
		applyMiddleware(
			routerMiddleware(history),
		),
 	),
)

const render = () => {
	ReactDOM.render(
		<Provider store={store}>
			<App history={history} />
		</Provider>,
		document.getElementById('root')
	)
}

render()

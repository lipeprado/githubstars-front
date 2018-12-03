import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './containers/App/App';
import createStore from './store';

// Styles
import './style/_global.module.scss';
import 'react-tagsinput/react-tagsinput.css';

// Store Redux
const store = createStore();

ReactDOM.render(
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>,
	document.getElementById('root')
);

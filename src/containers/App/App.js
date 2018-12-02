import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Dashboard from '../Dashboard';
import NotFound from '../NotFound';

// Styles
import styles from './styles.module.scss';

class App extends Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route component={NotFound} />
				</Switch>
			</div>
		);
	}
}

App.propTypes = {};

export default App;

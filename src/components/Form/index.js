import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './styles.module.scss';

class Form extends Component {
	state = {
		username: 'lipeprado'
	};
	_onChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	_onSubmit = () => {
		const { username } = this.state;
		const { onSubmit } = this.props;
		onSubmit(username);
	};
	render() {
		return (
			<div>
				<div className={styles.innerForm}>
					<h3>https://github.com/</h3>
					<input
						name="username"
						type="text"
						placeholder="lipeprado"
						className={styles.input}
						onChange={this._onChange}
					/>
				</div>
				<div className={styles.wrapperButton}>
					<button onClick={this._onSubmit} className={styles.submitButton}>
						Get Repositories
					</button>
				</div>
			</div>
		);
	}
}

Form.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default Form;

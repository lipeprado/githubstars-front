import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '../../components/Table';

class List extends Component {
	render() {
		const { repos, handleEdit } = this.props;
		return (
			<div>
				<Table repos={repos} onClick={handleEdit} />
			</div>
		);
	}
}

List.propTypes = {
	repos: PropTypes.array.isRequired,
	handleEdit: PropTypes.func.isRequired
};

export default List;

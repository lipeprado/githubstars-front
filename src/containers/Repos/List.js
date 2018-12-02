import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
	render() {
		const { repos } = this.props;
		return (
			<div>
				{repos.map(repo => {
					return <h4 key={repo.id}>{repo.name}</h4>;
				})}
			</div>
		);
	}
}

List.propTypes = {
	repos: PropTypes.array.isRequired
};

export default List;

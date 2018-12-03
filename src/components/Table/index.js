import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './styles.module.scss';

const Table = ({ repos, onClick }) => {
	function _handleClick(repo) {
		onClick(repo);
	}
	return (
		<Fragment>
			<table>
				<thead className={styles.tableHeader}>
					<tr>
						<th>Repository</th>
						<th>Description</th>
						<th>Language</th>
						<th>Tags</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody className={styles.tableContent}>
					{repos.map(repo => {
						return (
							<tr key={repo.id}>
								<td>{repo.name}</td>
								<td>{repo.description}</td>
								<td className={styles.lang}>{repo.language}</td>
								{repo.tags.length > 0 ? (
									<td className={styles.wrapperTags}>
										{repo.tags.map(tag => (
											<span key={tag.id} className={styles.tags}>
												#{tag.name}
											</span>
										))}
									</td>
								) : (
									<td>Tags not found.</td>
								)}
								<td
									onClick={() => _handleClick(repo)}
									className={styles.action}
								>
									<span>Edit</span>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</Fragment>
	);
};

Table.propTypes = {
	repos: PropTypes.array.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Table;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TagsInput from 'react-tagsinput';
import { connect } from 'react-redux';

// Actions
import { fetchingRepos } from '../../actions/repos';

// styles
import styles from './styles.module.scss';

class ModalEdit extends Component {
	state = {
		tags: ''
	};

	componentWillMount = () => {
		this.setState({
			tags: this.replacer(this.props.repo.tags)
		});
	};
	_handleChange = event => {
		this.setState({
			tags: event
		});
	};

	_handleSave = async () => {
		const { tags } = this.state;
		const { repo, onEdit, fetchingRepos, closeModal } = this.props;
		const res = await onEdit(tags.join(','), repo.id);
		closeModal();
		if (res === 200) {
			await fetchingRepos(repo.username);
		}
	};

	replacer = tags => {
		let newArr = [];
		tags.map(tag => newArr.push(tag.name));
		return newArr;
	};
	render() {
		const { name } = this.props.repo;
		const { closeModal } = this.props;
		const { tags } = this.state;
		return (
			<div className={styles.portal}>
				<div className={styles.innerModal}>
					<h4>Edit tags for {name}</h4>
					<TagsInput
						className={styles.input}
						value={tags}
						onChange={this._handleChange}
					/>

					<div className={styles.wrapperButton}>
						<button onClick={this._handleSave} className={styles.submitButton}>
							Save
						</button>
						<button onClick={closeModal} className={styles.submitButton}>
							Cancel
						</button>
					</div>
				</div>
			</div>
		);
	}
}

ModalEdit.propTypes = {
	repo: PropTypes.object.isRequired,
	closeModal: PropTypes.func.isRequired,
	fetchingRepos: PropTypes.func.isRequired,
	onEdit: PropTypes.func.isRequired
};

export default connect(
	null,
	{ fetchingRepos }
)(ModalEdit);

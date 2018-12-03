import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Portal } from 'react-portal';
import _ from 'lodash';

// Actions
import { saveRepos, fetchingRepos, clearAll } from '../../actions/repos';
import { creatingTags } from '../../actions/tags';

// Components
import Navbar from '../../components/Navbar';
import Form from '../../components/Form';
import ReposList from '../Repos/List';
import Loading from '../../components/Loading';
import ModalEdit from '../../components/ModalEdit';
// Styles
import styles from './styles.module.scss';

class Dashboard extends Component {
	state = {
		repos: [],
		isOpen: false
	};

	componentWillReceiveProps = nextProps => {
		if (this.state.repos !== nextProps.repos) {
			this.setState({
				repos: nextProps.repos
			});
		}
	};

	_handleSubmit = async username => {
		const { saveRepos, fetchingRepos } = this.props;
		const res = await saveRepos(username);
		if (res === 200) {
			fetchingRepos(username);
		}
	};

	_openModal = repo => {
		this.setState({
			isOpen: true,
			repo: repo
		});
	};

	_closeModal = () => {
		this.setState({
			isOpen: false
		});
	};

	_handleEdit = async (tags, repoId) => {
		const { creatingTags } = this.props;
		const status = await creatingTags(tags, repoId);
		return status;
	};

	render() {
		const { repos, isOpen, repo } = this.state;
		const { isFetching, isSaving, clearAll } = this.props;

		return (
			<div className={styles.container}>
				{isOpen && (
					<Portal>
						<ModalEdit
							onEdit={this._handleEdit}
							closeModal={this._closeModal}
							repo={repo}
						/>
					</Portal>
				)}
				<Navbar clearAll={clearAll} />
				{isSaving || isFetching ? (
					<Loading
						text={isSaving ? 'Saving repositories' : "Now we're fetching them."}
					/>
				) : (
					<Fragment>
						{_.isEmpty(repos) && (
							<div className={styles.wrapperDashboard}>
								<Form onSubmit={this._handleSubmit} />
							</div>
						)}
						{repos.length > 0 && (
							<ReposList repos={repos} handleEdit={this._openModal} />
						)}
					</Fragment>
				)}
			</div>
		);
	}
}

Dashboard.propTypes = {
	saveRepos: PropTypes.func.isRequired,
	fetchingRepos: PropTypes.func.isRequired,
	creatingTags: PropTypes.func.isRequired,
	clearAll: PropTypes.func.isRequired,
	repos: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	isSaving: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	return {
		isFetching: state.reposState.isFetching,
		isSaving: state.reposState.isSaving,
		repos: state.reposState.repos
	};
};
export default connect(
	mapStateToProps,
	{ saveRepos, fetchingRepos, creatingTags, clearAll }
)(Dashboard);

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

// Actions
import { saveRepos, fetchingRepos } from '../../actions/repos';

// Components
import Navbar from '../../components/Navbar';
import Form from '../../components/Form';
import ReposList from '../Repos/List';
import Loading from '../../components/Loading';

// Styles
import styles from './styles.module.scss';

class Dashboard extends Component {
	state = {
		repos: []
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

	render() {
		const { repos } = this.state;
		const { isFetching, isSaving } = this.props;

		return (
			<div className={styles.container}>
				<Navbar />
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
						<ReposList repos={repos} />
					</Fragment>
				)}
			</div>
		);
	}
}

Dashboard.propTypes = {
	saveRepos: PropTypes.func.isRequired,
	fetchingRepos: PropTypes.func.isRequired,
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
	{ saveRepos, fetchingRepos }
)(Dashboard);

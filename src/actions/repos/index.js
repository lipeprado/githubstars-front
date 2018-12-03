import * as types from './types';
import { savingRepos, fetchReposFromApi } from '../../api/Repos';

// action creators
export const savingReposRequest = () => ({
	type: types.SAVING_REPOS_REQUEST
});
export const savingReposFailed = error => ({
	type: types.SAVING_REPOS_FAILED,
	error
});

export const savingReposSuccess = () => ({
	type: types.SAVING_REPOS_SUCCESS
});

export const saveRepos = username => {
	return async dispatch => {
		try {
			dispatch(savingReposRequest());
			const response = await savingRepos({ username });
			dispatch(savingReposSuccess());
			return response.status;
		} catch (error) {
			dispatch(savingReposFailed(error));
		}
	};
};

// Fetching

export const fetchingReposRequest = () => ({
	type: types.FETCHING_REPOS_REQUEST
});
export const fetchingReposFailed = error => ({
	type: types.FETCHING_REPOS_FAILED,
	error
});

export const fetchingReposSuccess = repos => ({
	type: types.FETCHING_REPOS_SUCCESS,
	repos
});

export const fetchingRepos = username => {
	return async dispatch => {
		try {
			dispatch(fetchingReposRequest());
			const response = await fetchReposFromApi(username);
			setTimeout(() => {
				dispatch(fetchingReposSuccess(response.data));
			}, 300);
			return response.status;
		} catch (error) {
			dispatch(fetchingReposSuccess(error));
		}
	};
};

export const clearAll = () => ({ type: types.CLEAR_ALL });

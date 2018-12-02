import initialState from './initialState';
import * as types from '../actions/repos/types';

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SAVING_REPOS_REQUEST:
			return { ...state, isSaving: true };
		case types.SAVING_REPOS_SUCCESS:
			return { ...state, isSaving: false };
		case types.SAVING_REPOS_FAILED:
			return { ...state, isSaving: false };
		case types.FETCHING_REPOS_REQUEST:
			return {
				...state,
				isFetching: true
			};
		case types.FETCHING_REPOS_SUCCESS:
			return {
				...state,
				isFetching: false,
				repos: action.repos.repos
			};
		case types.FETCHING_REPOS_FAILED:
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default:
			return state;
	}
};

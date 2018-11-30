// USING DUCKS PATTERN

// action types
export const FETCHING_REPOS_REQUEST = 'FETCHING_REPOS_REQUEST';
export const FETCHING_REPOS_SUCCESS = 'FETCHING_REPOS_SUCCESS';
export const FETCHING_REPOS_FAILED = 'FETCHING_REPOS_FAILED';

// action creators
export const fetchingRepos = msisdn => ({
	type: FETCHING_REPOS_REQUEST,
	msisdn
});

// reducer
export const initialState = { repos: [], username: '', isLoading: false };

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

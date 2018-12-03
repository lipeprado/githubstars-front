import { combineReducers } from 'redux';
import { reducer as repos } from './repos';
import initialState from './initialState';

const appReducer = combineReducers({
	reposState: repos
});

const rootReducer = (state, action) => {
	if (action.type === 'CLEAR_ALL') {
		state = {
			...initialState
		};
	}

	return appReducer(state, action);
};

export default rootReducer;

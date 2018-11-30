import { combineReducers } from 'redux';
import { reducer as repos } from './repos';

const rootReducer = combineReducers({
	reposState: repos
});

export default rootReducer;

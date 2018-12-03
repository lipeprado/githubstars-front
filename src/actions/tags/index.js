import * as types from './types';
import { savingTags } from '../../api/Tags';

// Creating
export const creatingTagsSuccess = () => ({
	type: types.CREATING_TAGS_SUCCESS
});

export const creatingTagsFailed = () => ({
	type: types.CREATING_TAGS_FAILED
});

export const creatingTags = (tags, repoId) => {
	return async dispatch => {
		try {
			const response = await savingTags(tags, repoId);
			dispatch(creatingTagsSuccess());
			return response.status;
		} catch (error) {
			dispatch(creatingTagsFailed(error));
		}
	};
};

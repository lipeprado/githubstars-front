import { Client } from './Client';

export const savingTags = (tags, repoId) => {
	return Client.post(`tags/${repoId}`, { tag: tags });
};

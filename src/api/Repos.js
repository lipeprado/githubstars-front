import { Client } from './Client';

export const savingRepos = username => {
	return Client.post('repos', username);
};

export const fetchReposFromApi = username => {
	return Client.get(`/repos/${username}`);
};

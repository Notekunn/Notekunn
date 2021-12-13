const simpleGit = require('simple-git');
const git = simpleGit();
exports.clone = (remoteUrl, pathProject) => {
	return git.clone(remoteUrl, pathProject);
};

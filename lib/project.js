const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const cleanup = () => {
	console.log('Cleaning up.');
	cp.execSync(`git checkout -- package.json`);
};

const handleExit = () => {
	cleanup();
	console.log('Exiting without error.');
	process.exit();
};

exports.setup = (projectPath) => {
	cp.execSync(`cd ${projectPath}`);
	cp.execSync('rm -rf .git');
};

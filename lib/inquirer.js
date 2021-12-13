const inquirer = require('inquirer');
// const fs = require('fs');

exports.askTemplate = (templates) => {
	const QUESTIONS = [
		{
			name: 'templateUrl',
			type: 'list',
			message: 'What project template would you like to generate?',
			choices: templates,
		},
		{
			name: 'projectName',
			type: 'input',
			message: 'Project name:',
			validate: function (input) {
				if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
				else return 'Project name may only include letters, numbers, underscores and hashes.';
			},
		},
	];
	return inquirer.prompt(QUESTIONS);
};
exports.askForForceWrite = (projectName) => {
	return inquirer.prompt({
		name: 'shouldForce',
		type: 'confirm',
		default: false,
		message: `Project ${projectName} exists, should we force write?`,
	});
};

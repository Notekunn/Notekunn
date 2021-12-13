#!/usr/bin/env/ node
const boxen = require('boxen');
const chalk = require('chalk');
const showInfo = () => {
	const personalInformation = [
		['Full name', 'Trần Đức Cường'],
		['Date of Birth', '10/04/2000'],
		['Email', 'cuong.nl5.kma@gmail.com'],
		['School', 'Academy of Cryptography Techniques'],
		['Github', 'https://github.com/Notekunn'],
	];
	const seperator = ' '.repeat(20);
	const header = chalk.red(`${seperator}NOTEKUNN PERSONAL PACKAGE${seperator}\n`);
	const maxKeyLength = personalInformation.reduce((a, b) => {
		return Math.max(a, b[0].length);
	}, 0);
	return personalInformation.reduce((a, b) => {
		const [key, value] = b;
		return (
			`${a}\n${chalk.white.bold(`${' '.repeat(maxKeyLength - key.length)}${key}:`)}` +
			`  ${chalk.cyan(value)}`
		);
	}, header);
};
const boxOption = {
	padding: 1,
	borderStyle: 'round',
	borderColor: 'green',
	float: 'left',
	align: 'left',
};
module.exports = () => console.log(boxen(showInfo(), boxOption), '\n');

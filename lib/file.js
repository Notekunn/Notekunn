const fs = require('fs');
const path = require('path');

module.exports = {
	getAbsolutePath: (folderName) => {
		return path.resolve(process.cwd(), folderName);
	},

	directoryExists: (filePath) => {
		return fs.existsSync(filePath);
	},
};

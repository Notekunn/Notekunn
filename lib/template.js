// const organizationUrl = `https://github.com/notekunn-organization`;
const axios = require('axios').default;
const templateUrl = `https://gist.githubusercontent.com/Notekunn/bd75454314724b9a0b77c8034726f6ef/raw/da4fab636dee3b76b1506d0198a743adb10f62c8/template.json`;
// const templates = [
// {
// 	value: `${organizationUrl}/ts-package-boilerplate`,
// 	name: 'Typescript Package NPM',
// },
// {
// 	value: `${organizationUrl}/ts-package-boilerplate`,
// 	name: 'React Chrome Extension',
// },
// ];
exports.getTemplates = () => axios.get(templateUrl).then((e) => e.data);

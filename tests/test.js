const inquirer = require('inquirer');

inquirer.createPromptModule([{type: 'input', name: 'test', message: 'Test input'}])
.then(answers => console.log(answers))
.catch(error => console.error(error));
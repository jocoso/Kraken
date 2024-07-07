#!/usr/bin/env node

const { program } = require('commander');
const inquirer = require('inquirer');
const {uploadFile, listFiles} = require('./drive/drivefunct.js')

program
    .version('1.0.0')
    .description('Kraken Art Version Control System');

program
    .command('init')
    .description('Initialize a new Kraken Art Version Control System repository')
    .option('-f, --force', 'Force initialization')
    .action((options) => {
        console.log(`Initializing Kraken Art Version Control System repository${options.force? ', forcefully' : ''}`);
    });
    

program
    .command('addart')
    .description('Add a new artwork')
    .action(() => {
        let questions = [
            {
                type: 'input',
                name: 'title',
                message: 'Artwork Title:'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Artwork Description:'
            }
        ];

        inquirer.prompt(questions).then(answers => {
            console.log(`Artwork Added: Title - ${answers.title}, Description - ${answers.description}`);
            // Add the logic to interact with the database
        }
    );
});

program
    .command('listart')
    .description('List all artwork on my account')
    .action(() => {
        console.log('Art Gallery');
        console.log('--------------------------------');
        listFiles();
    }
);

program
    .command('commart')
    .description('Add a new version of artwork')
    .action(() => {
        const questions = [
            // {
            //     type: 'input',
            //     name: 'client_email',
            //     message: 'Enter your Google service account email:',
            // },
            // {
            //     type: 'input',
            //     name: 'private_key',
            //     message: 'Enter your Google service account private key:',
            //     mask: ' '
            // },
            {
                type: 'input',
                name: 'message',
                message: 'Commit Message: ',
                validate: (input) => {
                    if(input.trim().length <= 0) {
                        console.log('Must enter a valid commit message.');
                        return false;
                    }
                    return true;
                }
            }
        ];

        inquirer.prompt(questions).then(async answers => {
            await uploadFile(/*answers.client_email, answers.private_key*/);
            console.log(`Committed with message:\n ${answers.message}`);
            // Add the logic to interact with the database
        })
    })


program
    .command('compart')
    .description('Compare to versions of artwork')
    .action(() => {
        const questions = [
            {
                type: 'input',
                name: 'version1',
                message: 'Type ID for version 1',
                validate: (input) => {
                    if(!Number.isInteger(parseInt(input))) {
                        console.log('Must enter a valid version ID.');
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'version2',
                message: 'Type ID for version 2',
                validate: (input) => {
                    if(!Number.isInteger(parseInt(input))) {
                        console.log('Must enter a valid version ID.');
                        return false;
                    }
                    return true;
                }
            }
        ];

        inquirer.prompt(questions).then(answers => {
            console.log('Comparing versions:', answers.version1, 'and', answers.version2, "...");
            if(answers.version1 !== answers.version2) {
                console.log('Versions mismatch.')
                // Add the logic to compare versions
            } else {
                console.log('Versions are the same.')
            }
        })
    })
program.parse(process.argv);


//packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
//Creates an array of all the questions.
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?(Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                return "Please enter a title.";
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project(Required)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                return "Please enter a description.";
            }
        }
    },
    {
        type: "input",
        name: "install",
        message: "Please enter installation instructions",
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage instructions",
    },
    {
        type: "input",
        name: "collaborate",
        message: "Enter any collaboration instructions if any",

    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What licenses does your project use?',
        choices: [
            'Apache',
            'GNUGPLv3',
            'MIT',
            'ISC',
            'Mozilla'
        ]
    },
    {
        type: "input",
        name: "test",
        message: "Please enter test instructions if any",
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your Github username(Required)",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                return "Please enter a Github username.";
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address(Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                return "Please enter a email address.";
            }
        }
    }
];
//writing a file using the inquirer prompt .
function writeFile() {
    return inquirer.prompt(questions)
        .then((answers) => {
            const rdMePage = generateMarkdown(answers)
            console.log(rdMePage)

            fs.writeFile('READMe.md', rdMePage, err => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('ReadMe file created successfully!');
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

writeFile();

const inquirer = require('inquirer'); //import inquirer module and store it in a variable called prompts and use it to ask the user questions about the project
const fs = require('fs'); // dependency required for functionality
const generateMarkdown = require('./assets/js/generateMarkdown.js'); //import the generateMarkdown function from the utils folder

const init = () => {
    /*create an array of question prompts, using the created variable (const questions = require('inquirer');) that the user will answer 
    to generate the README file and pass the data into the generateMarkdown function*/
    inquirer.prompt([
        // ask the user for the the project title
        {
            type: 'input',
            name: 'title',
            message: 'What do you want to call this project? (e.g. "My New Project")',
            validate: function (input) {
                if (input.length < 1 || input.length > 100 || input.includes(' ')) {
                    return 'Please enter a title for your project. It must be between 1 and 100 characters and cannot contain spaces.';
                }
                else { //if the input is valid, return true
                    return true;
                }
            }
        },

        //ask the user to enter a description of the project
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project.',
            validate: function (input) {
                if (input.length < 1 || input.length > 1000) {
                    return 'Please enter a description for your project. It must be between 1 and 1000 characters.';
                }
                //if the input is valid, or no input, return true
                else { 
                    return true;
                }
            }
        },

        //ask the user to enter a table of contents
        {
            type: 'input',
            name: 'tableOfContents',
            message: 'Please enter a table of contents for your project. (e.g. "Installation, Usage, License, Contributing, Tests, Questions")',
            validate: function (input) { //if the input is valid, return true
                if (input.length < 1 || input.length > 10000) {
                    return 'Please enter a table of contents for your project. It must be between 1 and 10000 characters.';
                }
                //if the input is valid, return true
                else { 
                    return true;
                }
            }
        },

        //ask the user to enter a license for the project (e.g. "MIT", "Apache", "GPL", "BSD", "ISC", "None")
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license for your project.',
            choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
        },

        //ask the user to enter a contribution guidelines
        {
            type: 'input',
            name: 'contributionGuidelines',
            message: 'Please enter a contribution guidelines for your project. (e.g. "To contribute, please submit a pull request on GitHub.")',
            validate: function (input) {
                if (input.length < 1 || input.length > 10000) {
                    return 'Maybe later? type in, Yep or Nope to continue.'; //for user interaction, otherwise pointless ;)
                }
                //if the input is valid, return true
                else { 
                    return true;
                }
            }
        },

        //ask the user to enter the names of creators and contributors
        {
            type: 'input',
            name: 'test',
            message: 'Please enter the names of creators and contributors. (e.g. "The following people have contributed to this project: Hope Pope, Moe Doe, Selina Williams, Craig Golliath.")',
            validate: function (input) {
                if (input.length < 1 || input.length > 10000) {
                    return 'Maybe later? type in, Yep or Nope to continue.'; //for user interaction, otherwise pointless ;)
                }
                //if the input is valid, return true
                else { 
                    return true;
                }
            }
        },

        //ask the user to enter a test instructions
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Please enter a test instructions for your project. (e.g. "To run tests, run the tests command.")',
            validate: function (input) {
                if (input.length < 1 || input.length > 10000) {
                    return 'Maybe later? type in, Yep or Nope to continue.'; //for user interaction, otherwise pointless (trick is, user still meets the criteria of two or more characters);)
                }
                //if the input is valid, return true
                else { 
                    return true;
                }
            }
        },

        //ask the user to enter a the techonlogy used in the project
        {
            type: 'list',
            name: 'technologyUsed',
            message: 'Please select the technology used in your project.',
            choices: ['HTML', 'CSS', 'JS', 'MySQL', 'MongoDB', 'React', 'Python', 'PHP', 'Some of the above plus other technologies', 'None']
        },

        //ask the user to enter a the github username of the user who created the project
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Please enter the github username of the user who created the project.',
            validate: function (input) {
                if (input.length < 1 || input.length > 100 || input.includes(' ')) {
                    return 'Please enter the github username of the user who created the project. It must be between 1 and 100 characters and cannot contain spaces.';
                }
                //if the input is valid, return true
                else { 
                    return true;
                }
            }
        },

        //ask the user to enter a the github url of the user who created the project
        {
            type: 'input',
            name: 'githubUrl',
            message: 'Please enter the github url of the user who created the project.',
            validate: function (input) {
                if (input.length < 1 || input.length > 100 || input.includes(' ')) {
                    return 'Please enter the github url of the user who created the project. It must be between 1 and 100 characters and cannot contain spaces.';
                }
                //if the input is valid, return true
                else { 
                    return true;
                }
            }
        },

        //ask the user to enter a the email of the user who created the project
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email of the user who created the project.',
            validate: function (input) { 
                if (input.length < 1 || input.length > 100 || input.includes(' ')) {
                    return 'Maybe later? type in, Yep or Nope to continue.';
                }
                //if the input is valid, return true
                else { 
                    return true;
                }
            }
        }
    ]).then(answers => {

        const content = generateMarkdown(answers); // 

        fs.writeFileSync('./README.md', content);
        console.log('Successfully created README.md');
    }
    ).then(() => {
        console.log('Successfully created README.md');
    }).catch(err => { console.log(err); });
}

init();



const inquirer = require('inquirer'); //import inquirer module and store it in a variable called prompts and use it to ask the user questions about the project
const fs = require('fs'); // dependency required for functionality
const generateMarkdown = require('./assets/js/generateMarkdown.js'); //import the generateMarkdown function from the utils folder

const init = () => {
    /*create an array of question prompts, using the created variable (const questions = require('inquirer');) that the user will answer 
    to generate the README file and pass the data into the generateMarkdown function*/
    inquirer.prompt([

        //ask the user to enter a table of contents
        {
            type: 'input',
            name: 'tableOfContents',
            message: 'Hello you! You have started the process of generating a README FILE. A table of contents has been automatically generated for You. Please press enter to continue.',
            validate: function (input) { 
                if (input.length > 1) {
                    return 'Please delete (backspace bttton) the characters typed in and press enter to continue.';
                }
                //if the input is valid, or no input, return true
                else { 
                    return true;
                }
            }
        },

        // ask the user for the the project title
        {
            type: 'input',
            name: 'title',
            message: 'What do you want to call this project? (e.g. "My New Project")',
            validate: function (input) {
                if (input.length < 1 || input.length > 100 || input === ' ') {
                    return 'Please enter a title for your project. It must be between 1 and 100 characters.';
                }
                //if the input is valid, return true
                else { 
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

        //ask the user to enter the installation instructions
        {   type: 'input',
            name: 'installation',
            message: 'Please enter the installation instructions for your project.',
            validate: function (input) { 
                if (input.length < 1 || input.length > 1000) {
                    return 'Please enter the installation instructions for your project. It must be between 1 and 1000 characters.';
                }
                //if the input is valid, or no input, return true
                else {
                    return true;
                }
            } 
        },

        //ask the user to enter the usage instructions
        {   type: 'input',
            name: 'usage',
            message: 'Please enter the usage instructions for your project.',
            validate: function (input) {
                if (input.length < 1 || input.length > 1000) {
                    return 'Please enter the usage instructions for your project. It must be between 1 and 1000 characters.';
                }
                //if the input is valid, or no input, return true
                else {
                    return true;
                }
            }
        },

        //ask the user to enter the technologies used
        {   type: 'input',
            name: 'technologies',
            message: 'Please enter the technologies used for your project.',
            validate: function (input) {
                if (input.length < 1 || input.length > 1000) {
                    return 'Please enter the technologies used for your project. It must be between 1 and 1000 characters.';
                }
                //if the input is valid, or no input, return true
                else {
                    return true;
                }
            }
        },

        //ask the user to enter the frameworks used
        {   type: 'input',
            name: 'frameworks',
            message: 'Please enter the frameworks used for your project.',
            validate: function (input) {
                if (input.length < 1 || input.length > 1000) {
                    return 'Please enter the frameworks used for your project. It must be between 1 and 1000 characters.';
                }
                //if the input is valid, or no input, return true
                else {
                    return true;
                }
            }
        },

        //ask the user to enter the dependencies
        {   type: 'input',
            name: 'dependencies',
            message: 'Please enter the dependencies for your project.',
            validate: function (input) {
                if (input.length < 1 || input.length > 1000) {
                    return 'Please enter the dependencies for your project.eg. "npm install inquirer".';
                }
                //if the input is valid, or no input, return true
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

        //ask the user to enter the name of the author
        {   type: 'input',
            name: 'author',
            message: 'Please enter the name of the author of your project.',
            validate: function (input) {    
                if (input.length < 1 || input.length > 100) {
                    return 'Please enter the name of the author of your project. It must be between 1 and 100 characters.';
                }
                //if the input is valid, or no input, return true
                else {
                    return true;
                }
            }
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
            name: 'acknowledgements',
            message: 'Please enter the names of contributors of your project.',
        },
        
        //ask the user to enter a test instructions
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Please enter a test instructions for your project. (e.g. "To run tests, run the tests command.")',
        },

        // ask the user to enter questions for the project
        {
            type: 'input',
            name: 'questions',
            message: 'Please enter questions for your project. (e.g. "How do I use this project?")'
        },

        //ask the user to enter a the github username of the user who created the project
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Please enter the github username of the user who created the project.',
        },

        //ask the user to enter a the github url of the user who created the project
        {
            type: 'input',
            name: 'githubUrl',
            message: 'Please enter the github url of the user who created the project.',
        },

        //ask the user to enter a the email of the user who created the project
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email of the user who created the project.',
    
        }
    ]).then(answers => {

        const content = generateMarkdown(answers);  

        fs.writeFileSync('./README.md', content);
        // console.log('Successfully created README.md');
    }
    ).then(() => {
        console.log('Successfully created README.md');
    }).catch(err => { console.log(err); });
}

init();


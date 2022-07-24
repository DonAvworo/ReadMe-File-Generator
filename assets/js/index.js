
const inquirer = require('inquirer'); //import inquirer
const fs = require('fs'); // dependency required for functionality
const generateMarkdown = require('./utils/generateMarkdown.js'); //import the generateMarkdown function from the utils folder


// create an array of questions that the user will answer to generate the README file
const questions = [
    {   type: 'input',
        name: 'title',
        message: 'What do you want to call this project? (e.g. "My New Project")',
        validate: function(input) {
        if (input.length < 1 || input.length > 100 || input.includes(' ')) {
            return 'Please enter a title for your project. It must be between 1 and 100 characters and cannot contain spaces.';
        }
        else { //if the input is valid, return true
            return true;
        } 
        }  
    }, 
    
    //ask the user to enter a description of the project
    {   type: 'input', 
        name: 'description',
        message: 'Please enter a description of your project.',
        validate: function(input) {
        if (input.length < 1 || input.length > 1000 ) {
            return 'Please enter a description for your project. It must be between 1 and 1000 characters.';
        }
        else { //if the input is valid, or no input, return true
            return true;
        } 
        } 
    }, 

    //ask the user to enter a table of contents
    {   type: 'input',
        name: 'tableOfContents',
        message: 'Please enter a table of contents for your project. (e.g. "Installation, Usage, License, Contributing, Tests, Questions")',
        validate: function(input) { //if the input is valid, return true
        if (input.length < 1 || input.length > 10000 ) {
            return 'Please enter a table of contents for your project. It must be between 1 and 10000 characters.';   
        }
        else { //if the input is valid, return true
            return true;
        }
        }
    }, 

    //ask the user to enter a license for the project (e.g. "MIT", "Apache", "GPL", "BSD", "ISC", "None")
    {   type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    }, 

    //ask the user to enter a contribution guidelines
    {   type: 'input',
        name: 'contributionGuidelines',
        message: 'Please enter a contribution guidelines for your project. (e.g. "To contribute, please submit a pull request on GitHub.")',
        validate: function(input) {
        if (input.length < 1 || input.length > 10000 ) { 
            return 'Maybe later? type in, Yep or Nope to continue.'; //for user interaction, otherwise pointless ;)
            }
            else { //if the input is valid, return true
            return true;
            }
        }
    },


    //ask the user to enter a test instructions
    { type: 'input',
        name: 'testInstructions',
        message: 'Please enter a test instructions for your project. (e.g. "To run tests, run the tests command.")',
        validate: function(input) {
        if (input.length < 1 || input.length > 10000 ) {
            return 'Maybe later? type in, Yep or Nope to continue.'; //for user interaction, otherwise pointless (trick is, user still meets the criteria of two or more characters);)
        }
        else { //if the input is valid, return true
            return true;
        }
        }
    }, 
    
    //ask the user to enter a the techonlogy used in the project
    {   type: 'list',
        name: 'technologyUsed',
        message: 'Please select the technology used in your project.',
        choices: ['HTML', 'CSS', 'JS','MySQL', 'MongoDB', 'React', 'Python', 'PHP', 'Some of the above plus other technologies', 'None']
        
    }, 
    
    //ask the user to enter a the github username of the user who created the project
    {   type: 'input',
        name: 'githubUsername',
        message: 'Please enter the github username of the user who created the project.',
        validate: function(input) {
        if (input.length < 1 || input.length > 100 || input.includes(' ')) {
            return 'Please enter the github username of the user who created the project. It must be between 1 and 100 characters and cannot contain spaces.';
        }
        else { //if the input is valid, return true
            return true;
        } 
        } 
    }, 
        
    //ask the user to enter a the github url of the user who created the project
    {   type: 'input',
            name: 'githubUrl',
            message: 'Please enter the github url of the user who created the project.',
            validate: function(input) {
            if (input.length < 1 || input.length > 100 || input.includes(' ')) {
                return 'Please enter the github url of the user who created the project. It must be between 1 and 100 characters and cannot contain spaces.';
            }
            else { //if the input is valid, return true
                return true;
            }
            }   
    },

         //ask the user to enter a the email of the user who created the project
    {   type: 'input',
        name: 'email',
        message: 'Please enter the email of the user who created the project.',
        validate: function(input) { //if the input is valid, return true
        if (input.length < 1 || input.length > 100 || input.includes(' ')) {
            return 'Maybe later? type in, Yep or Nope to continue.';
        }
        else { //if the input is valid, return true
            return true;
        }
        }
    }

];



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseLink(license) {

};




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    [ 'MIT', 'Apache', 'GPL', 'BSD', 'None' ].forEach(license => { //for each license in the array, run the function below
        if (license === license) {                              //if the license is equal to the license, run the function below
            return `[![License](https://img.shields.io/badge/license-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
        }
        else {
            return ''; // if no license is found, return an empty string
        }
    });

    renderLicenseBadge(license);
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
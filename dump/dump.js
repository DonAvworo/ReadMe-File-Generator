// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const inquirer = require('inquirer');
const fs = require('fs');

function renderLicenseBadge(license) {
    

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

// --------------------------------------------------

// TODO use this idea to help enter data for the homework task
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
//-----------------------------------------------------

['MIT', 'Apache', 'GPL', 'BSD', 'None'].forEach(license => { //for each license in the array, run the function below 
    if (license === license) {                               //if the license is equal to the license passed in, return the following,
                                                             //this will be the badge of the license that is passed in the renderLicenseBadge function
        return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
    
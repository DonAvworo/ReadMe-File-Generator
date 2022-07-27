
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //if the license is MIT, return the following string with url
  if (license === 'MIT' || 'Apache' || 'GPL' || 'BSD' || 'None') {  
    return '[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  //if the license is ISC, return the following string with url
  else if (license === 'ISC') { 
    return '[![ISC License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  }
  else {
    // if no license is found, return an empty string
    return ''; 
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license === license) {                              //if the license is equal to the license, return the license link
    return `[![License](https://img.shields.io/badge/license-${license}-blue.svg)](https://opensource.org/licenses/${license})
    `;
  }

  else {
    // if no license is found, return an empty string
    return ''; 
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //if the license is MIT, return the following string
  if (license === 'MIT') { 
    return `
  [![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  `;
  }
  //if the license is Apache, return the following string
  else if (license === 'Apache') { 
    return `                      
    
  [![Apache License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  `;
  }
  else {
    // if no license is found, return an empty string
    return ''; 
  }
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  // console.log(data) 

  // call the function to render the license section
  const license = renderLicenseSection(data.license);
  
  return ` 
  # Title: 
  ${data.title}
  ## License:
  ${license}
  ## Description:
  ${data.description}
  ## Table of contents
    * [Title](#title)
    * [License](#license)
    * [Description:](#description)
    * [Table of contents](#table-of-contents)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Technologies](#technologies)
    * [Frameworks](#frameworks)
    * [Dependencies](#dependencies)
    * [Author](#author)
    * [Contributing](#contributionguidelines)
    * [Acknowledgements](#acknowledgements)
    * [Test](#ttestInstructions)
    * [Questions](#questions)
    * [GitHub-User](#githubUsername)
    * [GitHub-Url](#githuburl)
    * [Email](#email)
  ${data.tableOfContents}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## Technologies:
  ${data.technologies}
  ## Frameworks:
  ${data.frameworks}
  ## Dependencies:
  ${data.dependencies}
  ## Author:
  ${data.author}
  ## Contributing:
  ${data.contributionGuidelines}
  ## Acknowledgements:
  ${data.acknowledgements}
  ## Test: 
  ${data.testInstructions}
  ## Questions:
  ${data.questions}
  ## GitHubUsername:
  ${data.githubusername}
  ## GitHubUrl:
  ${data.githuburl}
  ## Email:
  ${data.email}
    

  Embed images using the following syntax

  -1 Markup Syntax
  ![]()
  ![image descriptiom](image location)
  ![](homework/week-3-homework/assets/img/Web%20KeyGen.png)

  -2 Html Syntax
  <img src="" alt="">
  <img src="imageName.format" alt="image description">

`;
}

module.exports = generateMarkdown; // Export the generateMarkdown function for use in the index.js/controller
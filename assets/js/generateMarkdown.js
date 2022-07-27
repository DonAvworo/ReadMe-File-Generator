
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT' || 'Apache' || 'GPL' || 'BSD' || 'None') {  //if the license is MIT, return the following string with url
    return '[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  else if (license === 'ISC') { //if the license is ISC, return the following string with url
    return '[![ISC License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  }
  else {
    return ''; // if no license is found, return an empty string
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
    return ''; // if no license is found, return an empty string
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
        ## License 
        [![Apache License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
        `;
  }
  else {
    return ''; // if no license is found, return an empty string
  }
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  //mind the backticks (`) around the data.title and data.description variables TAKE CARE not to remove them
  console.log(data)

  const license = renderLicenseSection(data.license);
  

  return `  
    
    # ${data.title}
    ## Description
    ${data.description}
    ## Table of contents
    ${data.tableOfContents}
    * [Title](#title)
    
    * [General info](#general-info)
    * [Technologies](#technologies)
    * [Setup](#setup)
    * [Author](#author)


    ## General info
    This project is simple Lorem ipsum dolor generator.
	
    ## Technologies
    Project is created with:
    * Lorem version: 12.3
    * Ipsum version: 2.33
    * Ament library version: 999
	
    ## Setup
    To run this project, install it locally using npm:

    ${license}
    Embedding images using

    1) Markup Syntax
    ![]()
    ![image descriptiom](image location)
    ![](homework/week-3-homework/assets/img/Web%20KeyGen.png)

    2)HTML SAYNTAX
    <img src="" alt="">
    <img src="imageName.format" alt="image description">

`;
}

module.exports = generateMarkdown;
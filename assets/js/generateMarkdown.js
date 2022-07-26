// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { //mind the backticks (`) around the data.title and data.description variables TAKE CARE not to remove them
  return `  
    
    # ${data.title}
    ## Description
    ${data.description}
    ## Table of Contents
    ${data.tableOfContents}
    ## Table of contents
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

    ```

    ```

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
// TODO: Include packages needed for this application
const inquirer= require('inquirer')
const generateMarkdown= require("./utils/generateMarkdown")
const fs=require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"what is your project title?"
    },

    {
        type:"input",
        name:"description",
        message:"what is your project description?"
    },

    {
        type:"input",
        name:"installation",
        message:"How do you install?"
    },

    {
        type:"list",
        name:"license",
        message:"Choose the following license",
        choices:["MIT", "IBM", "Apache"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data=>{
        console.log(data)
        fs.writeFileSync("./output.README.md",generateMarkdown(data))
    })
}

// Function call to initialize app
init();

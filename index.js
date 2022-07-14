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
        type:"input",
        name:"usage",
        message:"What is the user story?"
    },

    {
        type:"list",
        name:"license",
        message:"Choose the following license",
        choices:["MIT", "IBM", "Apache"]
    },
    {
        type:"input",
        name:"badges",
        message:"Which badges did you earn?"
    },

    {
        type:"input",
        name:"features",
        message:"what are the features of your project?"
    },

    {
        type:"input",
        name:"credits",
        message:"list the people who contributed to the project."
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Please input testing instructions for the user:',
        when: ({ confirmTest }) => {
            if (confirmTest) {
                return true;
            } else {
                return false
            }
        }
    },

]


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

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
    },
    {
        type:"input",
        name:"badges",
        message:"Which badges did you earn?"
    },

    {
        type:"list",
        name:"features",
        message:"Which badges did you earn?"
    },

    {
        type: 'input',
        name: 'testing',
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

.then(data => {
    return generateMarkdown(data);
})
.then(Markdown => {
    return writeFile(Markdown);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
})
.then(copyFileResponse => {
    console.log(copyFileResponse);
})

.catch(err => {
    console.log(err);
})

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

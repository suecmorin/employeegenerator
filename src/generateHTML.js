
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const  questions = require("./index.js");

const buildFile =  (data) => {
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="./dist/style.css">
    </head>
    <body>
        <header>
            <div class="jumbotron jumbotron-fluid">
                <div class="container text-center">
                    <h1>${managerName}  " Team"</h1>
                </div>
            </div>  
        </header>
<main class = "row justify-content-around"
</main>
</body>
</html>
    `;
};


    `
}


module.exports = generateHTML;

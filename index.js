const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Employee = require("./lib/Employee.js");

const generateHTML = require("./src/generateHTML.js");

const managerTeam = [];

addManager();

function addManager() {
console.log("Let's build your team. Please answer the following questions.");
inquirer.prompt([
    {
        type: "input", 
        message: "Enter your name",
        name: "namer",
        validate: namer => {
            if(namer){
                return true;
            }else{
                console.log("Name cannot be blank");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "Enter your employee ID number:",
        name: "id",
        validate: id => {
            if(id){
                return true;
            }else{
                console.log("Please enter an ID number");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "Enter your email:",
        name: "email",
        validate: email =>{
            if(email){
                return true;
            }else{
                console.log("Please enter an email address");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "Enter your office number:",
        name: "officeNumber",
        validate: officeNumber =>{
            if(officeNumber){
                return true;
            }else{
                console.log("Please enter an office number");
                return false;
            }
        }
    }
 ]).then (data =>{
     const manager = new Manager(data.namer, data.id, data.email, data.officeNumber);
     managerTeam.push(manager);
     console.log("this is manager" + data);
    addteamMember();
})
};

function addteamMember() {
    return inquirer.prompt([
        {
        type: "list",
        message: "Enter employee's position:",
        name: "employeeType",
        choices: ["Engineer", "Intern"]
        }
    ]).then (function(answers){
        if(answers.employeeType == "Engineer"){
                addEngineer();
         } else {
                addIntern();
        }
    });
};
function addEngineer() {
    return inquirer.prompt([
        {
        type: "input",
        message: "Enter engineer's name:",
        name: "namer",
        validate: namer => {
            if(namer){
                return true;
            }else{
                console.log("Name cannot be blank");
                return false;
            }
        }
        },
        {
        type: "input",
        message: "Enter engineer's ID number",
        name: "id",
        validate: id => {
            if(id){
                return true;
            }else{
                console.log("Engineer ID cannot be blank");
                return false;
            }
        }
        },
        {
        type: "input",
        message: "Enter engineer's email address",
        name: "email",
        validate: email => {
            if(email){
                return true;
            }else{
                console.log("Email cannot be blank");
                return false;
            }
        }
        },
        {
        type: "input",
        message: "Enter engineer's github account",
        name: "github",  
        validate: github => {
            if(github){
                return true;
            }else{
                console.log("Github account cannot be blank");
                return false;
            }
        }
        }
    ]).then (data => {
        const engineer = new Engineer(data.namer, data.id, data.email, data.github);
        managerTeam.push(engineer);
        menu();
    });
};
    function addIntern() {
        return inquirer.prompt([
            {
            type: "input",
            message: "Enter intern's name:",
            name: "namer",
            validate: namer => {
                if(namer){
                    return true;
                }else{
                    console.log("Name cannot be blank");
                    return false;
                }
            }
            },
            {
            type: "input",
            message: "Enter intern's ID number",
            name: "id",
            validate: id => {
                if(id){
                    return true;
                }else{
                    console.log("ID cannot be blank");
                    return false;
                }
            }
            },
            {
            type: "input",
            message: "Enter intern's email address",
            name: "email",
            validate: email => {
                if(email){
                    return true;
                }else{
                    console.log("Email cannot be blank");
                    return false;
                }
            }
            },
            {
            type: "input",
            message: "Enter intern's college/university",
            name: "school",  
            validate: school => {
                if(school){
                    return true;
                }else{
                    console.log("College/university cannot be blank");
                    return false;
                }
            }
            }
        ]).then (data =>{
            const intern = new Intern(data.namer, data.id, data.email, data.school);
            managerTeam.push(intern); 
            menu();
        });
};
function menu() {
    return inquirer.prompt([
        {
        type: "list",
        message: "Do you want to add another employee?",
        name: "addEmployee",
        choices: ["Yes", "No"]
        }  
    ]).then (function(answers){
            if(answers.addEmployee == "Yes"){
                    addteamMember();
            } else {
                buildTeam();
            }
        });
};

function buildTeam() {
    const buildFile = generateHTML(managerTeam);
    fs.writeFile('./dist/index.HTML', buildFile, err => {
        if (err) {
            console.log("Error in creating index.HTML");
        }else {
            console.log("index.HTML created in dist subdirectory");
        }
        })
    };
    
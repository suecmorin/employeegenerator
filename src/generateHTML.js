
const fs = require('fs');
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Employee = require("./lib/Employee.js");
const questions = require("./index.js");

const makeCards = (data) => {
for (let i = 0; i < data.length; i ++) {
    if (data[i].getemployeeType === "Manager") {
         card === managerCard(data[i]);
    } else if (data[i].getemployeeType === "Engineer") {
        card === engineerCard(data[i]);
    } else if  (data[i].getemployeeType === "Intern") {
        card === internCard(data[i]);
    }
    return card;
}
}
const managerCard = (data) => {
   return `
   <div class="card col-sm-2 bg-primary text-white rounded">
   <div class ="card-body"
   <ul class="list-group list-group-flush list-unstyled">
   <li ${data.name}</li>
   <li <a href="mail to ${data.email}">${data.email}</a></li>
   <li ${data.officeNumber}</li>
   `
}

const engineerCard = (data) => {
    return `
    <div class="card col-sm-2 bg-success text-white rounded">
    <div class ="card-body"
    <ul class="list-group list-group-flush list-unstyled">
    <li ${data.name}</li>
    <li <a href="mail to ${data.email}">${data.email}</a></li>
    <li <a href="github.com/${data.github}"</a></li>
    `
 }

 const internCard = (data) => {
    return `
    <div class="card col-sm-2 bg-warning text-white rounded">
    <div class ="card-body"
    <ul class="list-group list-group-flush list-unstyled">
    <li ${data.name}</li>
    <li <a href="mail to ${data.email}">${data.email}</a></li>
    <li ${data.school}</li>
    `
 }
const generateHTML =  (data) => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/style.css">
    </head>
    <body>
        <header class="d-inline-block>
        <div class ="jumbotron-fluid text-white bg-transparent">
            <h2>Engineering Team</h2>
        </div> 
        </header>
<main class = "container-fluid">
<div class = "row justify-content-around">
<div class= "card-group col-sm-8 empDeck bg-transparent text-white" id="carddeck">
${makeCards(data)}
</div>
</div>
</main>
</body>
</html>
    `;
};

module.exports = generateHTML;



const makeCards = (data) => {
  console.log(data);
var card = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].getRole() === "Manager") {
    card += managerCard(data[i]);
   } 
   if (data[i].getRole() === "Engineer") {
    card += engineerCard(data[i]);
    } 
    if (data[i].getRole() === "Intern") {
     card += internCard(data[i]);
    }
  }
    return card;
    console.log(card);
  console.log(data);
  }

const generateHTML = (data) => {
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
          <link rel="stylesheet" href="./style.css">
      </head>
      <body>
        <h1>Engineering Team</h1>
  <main class = "container-fluid">
  <div class = "row justify-content-around bg-transparent">
  ${makeCards(data)}
  </div>
  </div>
  </main>
  </body>
  </html>
 `;
  };

  const managerCard = (data) => {
  return `
   <div class="card col-sm-4 bg-secondary rounded">
   <div class ="card-body">
   <ul class="list-group list-group-flush list-unstyled">
   <li>TEAM LEADER</li>
   <li>${data.getName()}</li>
   <li>Employee Number ${data.id}</li>
   <li><a href="mailto:${data.email}">Send Email</a></li>
   <li>Office ${data.officeNumber}</li>
   </ul>
   </div>
   </div>
   `
}

const engineerCard = (data) => {
  return `
    <div class="card col-sm-4 bg-success rounded">
    <div class ="card-body">
    <ul class="list-group list-group-flush list-unstyled">
    <li>ENGINEER</li>
    <li>${data.getName()}</li>
    <li>Employee Number ${data.id}</li>
    <li <a href="mail to ${data.email}">Send Email</a></li>
    <li> <a href="github.com/${data.github}">Github></a></li>
    </ul>
   </div>
   </div>
    `
}

const internCard = (data) => {
  return `
    <div class="card col-sm-4 bg-warning rounded">
    <div class ="card-body">
    <ul class="list-group list-group-flush list-unstyled">
    <li>INTERN</li>
    <li>${data.getName()}</li>
    <li>Employee Number ${data.id}</li>
    <li><a href="mail to ${data.email}">Send Email</a></li>
    <li>Student at   ${data.school}</li>
    </ul>
   </div>
   </div>
    `
}


module.exports = generateHTML;

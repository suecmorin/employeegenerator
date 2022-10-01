

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
    return card;
  }
  console.log(card);
  console.log(data);
 return card;
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
          <link rel="stylesheet" href="./dist/style.css">
      </head>
      <body>
          <header class="d-inline-block">
          <div class ="jumbotron-fluid text-white bg-transparent">
              <h2>Engineering Team</h2>
          </div> 
          </header>
  <main class = "container-fluid">
  <div class = "row justify-content-around">
  <div class= "card-group col-sm-8 empDeck bg-transparent text-white">
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
   <div class="card col-sm-2 bg-primary text-white rounded">
   <div class ="card-body">
   <ul class="list-group list-group-flush list-unstyled">
   <li>${data.getName()}</li>
   <li>${data.id}</li>
   <li><a href="mailto:${data.email}">${data.email}</a></li>
   <li>Office ${data.officeNumber}</li>
   </ul>
   </div>
   </div>
   `
}

const engineerCard = (data) => {
  return `
    <div class="card col-sm-2 bg-success text-white rounded">
    <div class ="card-body">
    <ul class="list-group list-group-flush list-unstyled">
    <li>${data.getName()}</li>
    <li>${data.id}</li>
    <li <a href="mail to ${data.email}">${data.email}</a></li>
    <li <a href="github.com/${data.github}"</a></li>
    </ul>
   </div>
   </div>
    `
}

const internCard = (data) => {
  return `
    <div class="card col-sm-2 bg-warning text-white rounded">
    <div class ="card-body">
    <ul class="list-group list-group-flush list-unstyled">
    <li>${data.getName()}>
    <li>${data.id}</li>
    <li <a href="mail to ${data.email}">${data.email}</a></li>
    <li ${data.school}</li>
    </ul>
   </div>
   </div>
    `
}


module.exports = generateHTML;

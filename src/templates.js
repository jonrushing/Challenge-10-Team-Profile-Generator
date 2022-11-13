
 const generateManager = manager => {
    return `<div class="card employee-card m-5">
    <div class="card-header bg-primary">
        <h2 class="card-title">${manager.name}</h2>
        <h3 class="card-title">${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
        </ul>
    </div>
</div>`;

};
const generateEngineer = engineer => {
    return `<div class="card employee-card m-5">
    <div class="card-header bg-danger">
        <h2 class="card-title">${engineer.name}</h2>
        <h3 class="card-title"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></li>
        </ul>
    </div>
</div>`;

};
const generateIntern = intern => {
    return `<div class="card employee-card m-5">
    <div class="card-header bg-warning ">
        <h2 class="card-title">${intern.name}</h2>
        <h3 class="card-title">${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
</div>`;

};

teamDeck = (team) => {
const teamInput = [];

    teamInput.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    teamInput.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    teamInput.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );
const compiledTeam = teamInput.join("");

const finalteam = maintemplate(compiledTeam);

return finalteam;
}

function maintemplate(compiledTeam){

return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" 
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" 
        crossorigin="anonymous">
    <title>Company Roster</title>
</head>
<body>
<header class="jumbotron bg-info">
<h1 class="display-4 text-center ">Company Roster</h1>
</header>
    <div class="container">
        <div class="row">
            <div class="row col-12 d-flex justify-content-center">
                ${compiledTeam}
            </div>
        </div>
    </div>
    
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" 
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" 
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" 
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" 
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" 
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" 
    crossorigin="anonymous"></script>
</body>
</html> `
        }

module.exports = teamDeck
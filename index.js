const fs = require('fs')
const inquirer = require('inquirer')

const engineer = require('./lib/Engineer')
const manager= require('./lib/Manager')
const intern = require('./lib/Intern')


const addEmployee = [{
        name: 'addEmployee',
        type: 'list',
        message: 'What type of employee would you like to add?',
        choices: ['Engineer','Intern','My Roster Is Complete'],
    }]

const genQuestions = [{
        name: 'name',
        type: 'input',
        message: "What is your employee's name?",
    },
    {   name: 'id',
        type: 'input',
        message: "What is your employee's ID number?",
    },
    {   name: 'email',
        type: 'input',
        message: "What is your employee's Email address?",
    }]
   const manQuestions = [{
        name: 'officeNumber',
        type: 'input',
        message: "What is your Manager's office number?",
    }]
    const engQuestions= [{
        name: 'gitHub',
        type: 'input',
        message: "What is your Engineer's Git Hub username?",
    }]
    const inQuestions = [{
        name: 'school',
        type: 'input',
        message: "Where is your Intern currently enrolled?",
    }]
function addManager() {
    inquirer.prompt([{
        name: 'name',
        type: 'input',
        message: "What is your name?",
    },
    {   name: 'id',
        type: 'input',
        message: "What is your ID number?",
    },
    {   name: 'email',
        type: 'input',
        message: "What is your Email address?",
    },
    {   name: 'officeNumber',
        type: 'input',
        message: "What is your Manager's office number?",
    }
    ])}



function addTeamMember() {
    inquirer.prompt([{
        name: 'addEmployee',
        type: 'list',
        message: 'What type of employee would you like to add?',
        choices: ['Engineer','Intern','My Roster Is Complete'],
    }]).then(function(results){
            switch(results.addEmployee) {
                case 'Manager': manquestion(); break;
                case 'Engineer': inquirer.prompt(genQuestions + engQuestions); break;
                case 'Intern': inquirer.prompt(genQuestions + inQuestions); break;
            }
    })
}
function genquestion() {
    inquirer.prompt (genQuestions)
    const questions = { };
    
}
addTeamMember();
// function addTeamMember() {
//     inquirer.prompt([{
//         name: 'addEmployee',
//         type: 'list',
//         message: 'What type of employee would you like to add?',
//         choices: ['Manager','Engineer','Intern','My Roster Is Complete'],
//         }]).then(function(result) {
//             switch(result.addEmployee) {
//                 case 'Manager': 
//             }
//         })
// }

 

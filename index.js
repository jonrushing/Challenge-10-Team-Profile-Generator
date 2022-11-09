const fs = require('fs')
const inquirer = require('inquirer')
const emailVal = require('email-validator')



const Engineer = require('./lib/Engineer')
const Manager= require('./lib/Manager')
const Intern = require('./lib/Intern')

const roster = []
// const addEmployee = [{
//         name: 'addEmployee',
//         type: 'list',
//         message: 'What type of employee would you like to add?',
//         choices: ['Engineer','Intern','My Roster Is Complete'],
//     }]

// const genQuestions = [{
//         name: 'name',
//         type: 'input',
//         message: "What is your employee's name?",
//     },
//     {   name: 'id',
//         type: 'input',
//         message: "What is your employee's ID number?",
//     },
//     {   name: 'email',
//         type: 'input',
//         message: "What is your employee's Email address?",
//     }]
//    const manQuestions = [{
//         name: 'officeNumber',
//         type: 'input',
//         message: "What is your Manager's office number?",
//     }]
//     const engQuestions= [{
//         name: 'gitHub',
//         type: 'input',
//         message: "What is your Engineer's Git Hub username?",
//     }]
//     const inQuestions = [{
//         name: 'school',
//         type: 'input',
//         message: "Where is your Intern currently enrolled?",
//     }]
function addManager() {
    inquirer.prompt([{
        name: 'name',
        type: 'input',
        message: "What is your name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter your name!");
                return false; 
            }
        }
    },
    {   name: 'id',
        type: 'input',
        message: "What is your ID number?",
        validate: idInput => {
            if (isNaN(idInput)) {
                console.log ("Please enter the employee's ID!")
                return false; 
            } else {
                return true;
            }
        }
    },
    {   name: 'email',
        type: 'input',
        message: "What is your Email address?",
        validate: email => {
                if (emailVal.validate(email) === true) {
                return true;
            } else {
                console.log ("Please enter a valid email!")
                return false;
            }
    }
        
    },
    {   name: 'officeNumber',
        type: 'input',
        message: "What is your Manager's office number?",
        validate: officeInput => {
                if (isNaN(officeInput)) {
                    console.log ("Please enter office number!")
                    return false; 
                } else {
                    return true;
                }
            }
    }
    ]).then(managerInfo =>{
        const {name, id, email, officeNumber} = managerInfo;
        const manager = new Manager(name, id, email, officeNumber);

        roster.push(manager);
        console.log(manager)
    })

}

addManager()

// function addTeamMember() {
//     inquirer.prompt([{
//         name: 'addEmployee',
//         type: 'list',
//         message: 'What type of employee would you like to add?',
//         choices: ['Engineer','Intern','My Roster Is Complete'],
//     }]).then(function(results){
//             switch(results.addEmployee) {
//                 case 'Manager': manquestion(); break;
//                 case 'Engineer': inquirer.prompt(genQuestions + engQuestions); break;
//                 case 'Intern': inquirer.prompt(genQuestions + inQuestions); break;
//             }
//     })
// }
// function genquestion() {
//     inquirer.prompt (genQuestions)
//     const questions = { };
    
// }
// addTeamMember();
// // function addTeamMember() {
// //     inquirer.prompt([{
// //         name: 'addEmployee',
// //         type: 'list',
// //         message: 'What type of employee would you like to add?',
// //         choices: ['Manager','Engineer','Intern','My Roster Is Complete'],
// //         }]).then(function(result) {
// //             switch(result.addEmployee) {
// //                 case 'Manager': 
// //             }
// //         })
// // }

 

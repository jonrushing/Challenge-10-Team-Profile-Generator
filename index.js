//importing external modules
const fs = require('fs')
const inquirer = require('inquirer')
const emailVal = require('email-validator')

//importing internal modules
const Engineer = require('./lib/Engineer')
const Manager= require('./lib/Manager')
const Intern = require('./lib/Intern')
//const Template = require('./src/templates')

//empty array to be filled by employee's created
const roster = []


function addManager() {
    inquirer.prompt([{
        name: 'name',
        type: 'input',
        message: "What is your name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("--Please enter your name!--");
                return false; 
            }
        }
    },
    {   name: 'id',
        type: 'input',
        message: "What is your ID number?",
        validate: idInput => {
            if (isNaN(idInput)) {
                console.log ("--Please enter the employee's ID!--")
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
                console.log ("--Please enter a valid email!--")
                return false;
            }
    }
        
    },
    {   name: 'officeNumber',
        type: 'input',
        message: "What is your Manager's office number?",
        validate: officeInput => {
                if (isNaN(officeInput)) {
                    console.log ("--Please enter a valid office number!--")
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
        console.log(manager);
        addTeamMember();
    })
}

function addTeamMember() {
    inquirer.prompt([{
        name: 'role',
        type: 'list',
        message: 'What type of employee would you like to add?',
        choices: ['Engineer','Intern'],
    },
    {
        name: 'name',
        type: 'input',
        message: "What is your name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("--Please enter your name!--");
                return false; 
            }
        }
    },
    {   name: 'id',
        type: 'input',
        message: "What is your ID number?",
        validate: idInput => {
            if (isNaN(idInput)) {
                console.log ("--Please enter the employee's ID!--")
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
                console.log ("--Please enter a valid email!--")
                return false;
            }
        }
    },
    {   name: 'github',
        type: 'input',
        message: "What is thier GitHub username?",
        when: (input) => input.role === "Engineer",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log ("--Please enter your GitHub username!--");
                return false; 
            }
        }
    },
    {   name: 'school',
        type: 'input',
        message: "What school do they attend?",
        when: (input) => input.role === "Intern",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log ("--Please enter your GitHub username!--");
                return false; 
            }
        }
    },
    {   name: 'addEmployee',
        type: 'confirm',
        message: 'Would you like to add another employee?',
        default: false
    }
              
    ]).then(teamMemberInfo => {
        let  {role, name, id, email, github, school, addEmployee} = teamMemberInfo;
        let employee

        if(role === 'Engineer'){
            employee = new Engineer(name, id, email, github);
        }

        if (role === 'Intern'){
            employee = new Intern(name, id, email, school)
        }

        console.log(employee);
        roster.push(employee);

        if (addEmployee){
            return addTeamMember(roster);
        } else{
            return roster;
        }
        
    })
   
};

addManager();

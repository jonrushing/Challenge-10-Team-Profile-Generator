//importing external modules
const fs = require('fs')
const inquirer = require('inquirer')
const emailVal = require('email-validator')

//importing internal modules
const templates = require('./src/templates')
const Engineer = require('./lib/Engineer')
const Manager= require('./lib/Manager')
const Intern = require('./lib/Intern')


//empty array to be filled by employee's created
const roster = []

// inquire questions asked to build a manager object which will be added to the roster array
const addManager = () => {
    
    return inquirer.prompt([{
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
                //imported email validater module being used here
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
//breaking down the differnt parts of the manager info and building a new manager object 
//to be added to the roster
    ]).then(managerInfo =>{
        const {name, id, email, officeNumber} = managerInfo;
        const manager = new Manager(name, id, email, officeNumber);

        roster.push(manager);  
    })
}

//inquire questions asked to build a Engineer/Intern object which will be added to the roster array
const addTeamMember = () => {

    return inquirer.prompt([{
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
//breaking down the differnt parts of the Engineer/Intern info, finding out which one was choosen,
//then building a new Engineer/Intern object to be added to the roster              
    ]).then(teamMemberInfo => {
        let  {role, name, id, email, github, school, addEmployee} = teamMemberInfo;
        let employee

        if(role === 'Engineer'){
            employee = new Engineer(name, id, email, github);
        }

        if (role === 'Intern'){
            employee = new Intern(name, id, email, school)
        }

        roster.push(employee);

        if (addEmployee){
            return addTeamMember(roster);
        } else{
            return roster;
        }
        
    })
   
};
//Function used to creat the HTMl index file
const writeFile = HTML => {
    fs.writeFile('./dist/index.html', HTML, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Success! Your Html page has been created!")
        }
    })
}; 

//the combined use of all the functions to generate an HTML file from the inquirer data filtered through the 
//appropriate employee template from the 'templates.js' module 
addManager()
.then(addTeamMember)
    .then(roster => {
        return templates(roster);
    })
    .then(HTML => {
        writeFile(HTML)
    })
  .catch(err => {
 console.log(err);
  });

//Child class of Employee

const Employee = require('./Employee')

//Extending the employee class to include school name
class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name,id,email);
        this.school = school;
    }
    getschool(){
        return this.school
    };
    getRole (){
        return "Intern"
    };
}

module.exports = Intern;
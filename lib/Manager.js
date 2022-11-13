//Child class of Employee

const Employee = require('./Employee')

//Extending the employee class to include office number 
class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
        super (name,id,email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber
    };
    getRole (){
        return "Manager"
    };
}

module.exports = Manager;
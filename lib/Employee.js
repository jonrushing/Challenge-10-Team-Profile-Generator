//Parent class object which all child classes will derive from
//Building the constructor object for which the inquire data will be placed into 
class Employee{
    constructor(name,id,email){
    this.name = name;
    this.id = id;
    this.email = email;
    }
    getName(){
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole (){
        return "employee"
    }
}
module.exports = Employee;
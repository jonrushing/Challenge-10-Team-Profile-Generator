const Employee = require('./Employee')


class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super (name,id,email);
        this.gitHub = gitHub;
    }
    getGithub(){
        return this.getHub
    };
    getRole (){
        return "Engineer"
    };
}

modules.exports = Engineer;
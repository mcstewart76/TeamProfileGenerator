const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
            this.github = github;

    }
    getGithub(){
        // const engineer = new Engineer(this.github)
        // console.log(this.github)
        // console.log(engineer.github)
        return this.github;
        

    }
    getRole(){
        // const employeeName = new Engineer();
        // console.log(employeeName.constructor.name)
        return this.constructor.name
    }
}


module.exports = Engineer;
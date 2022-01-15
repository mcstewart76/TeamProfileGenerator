const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
            this.school = school;

    }
    getSchool(){
        const intern = new Intern(this.school)
        console.log(this.school)
        console.log(intern.school)
        return this.school;
    }
    getRole(){
        const employeeName = new Intern();
        console.log(employeeName.constructor.name)
        return employeeName.constructor.name
    }
}

module.exports = Intern;
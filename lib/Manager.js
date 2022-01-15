const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNum){
        super(name, id, email);
            this.officeNum = officeNum;

    }
    getRole(){
        // const employeeName = new Manager();
        // console.log(employeeName.constructor.name)
        return employeeName.constructor.name
    }
}

module.exports = Manager;
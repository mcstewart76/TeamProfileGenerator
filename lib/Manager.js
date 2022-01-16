const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
            this.officeNumber = officeNumber;

    }
    getRole(){
        // const employeeName = new Manager();
        // console.log(employeeName.constructor.name)
        return this.constructor.name
    }
    getOfficeNumber(){
        // const employeeName = new Manager();
        // console.log(employeeName.constructor.name)
        return this.officeNumber
    }
    
}


module.exports = Manager;
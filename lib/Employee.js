class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
    // const employeeName = new Employee(this.name)
    // console.log(this.name)
    // console.log(employeeName.name)
    return this.name;
    };

    getId(){
    // const employeeName = new Employee("test", this.id)
    // console.log(this.id)
    // console.log(employeeName.id)
    return this.id;
    }

    getEmail(){
    // const employeeName = new Employee("test", 0, this.email)
    // console.log(this.email)
    // console.log(employeeName.email)
    return this.email;
    }
    getRole(){
        // const employeeName = new Employee();
        // console.log(employeeName.constructor.name)
        return this.constructor.name

    };
}

module.exports = Employee;
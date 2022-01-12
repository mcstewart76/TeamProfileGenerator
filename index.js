var inquirer = require("inquirer");
//var fs = require("fs");


class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
    const employeeName = new Employee(this.name)
    console.log(this.name)
    console.log(employeeName.name)
    };

    getId(){
    const employeeName = new Employee("test", this.id)
    console.log(this.id)
    console.log(employeeName.id)
    }

    getEmail(){
    const employeeName = new Employee("test", 0, this.email)
    console.log(this.email)
    console.log(employeeName.email)
    }
    getRole(){
        const employeeName = new Employee();
        console.log(employeeName.constructor.name)
        return employeeName.constructor.name

    };
}




class Manager extends Employee{
    constructor(name, id, email, officeNum){
        super(name, id, email);
            this.officeNum = officeNum;

    }
    getRole(){
        const employeeName = new Manager();
        console.log(employeeName.constructor.name)
        return employeeName.constructor.name
    }
}
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
            this.github = github;

    }
    getGitHub(){
        const engineer = new Engineer(this.github)
        console.log(this.github)
        console.log(engineer.github)
        

    }
    getRole(){
        const employeeName = new Engineer();
        console.log(employeeName.constructor.name)
        return employeeName.constructor.name
    }
}
// const e = new Engineer("jim", 47, "test@test.com");
// e.getName();
// e.getId();
// e.getEmail();
// e.getRole();
// const ef = new Employee("jim", 47, "test@test.com");
// ef.getName();
// ef.getId();
// ef.getEmail();
// ef.getRole();

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
            this.school = school;

    }
    getSchool(){
        const intern = new Intern(this.school)
        console.log(this.school)
        console.log(intern.school)
    }
    getRole(){
        const employeeName = new Intern();
        console.log(employeeName.constructor.name)
        return employeeName.constructor.name
    }
}

const questions = [
    {
        type: 'input',
        name: 'teammanager',
        message: 'What is the team managers name?',
        validate: (value) => {
            if(value){
                return true
            }else{
                return "Please enter a value to continue"
            }
        }

    },
    {
        type: 'input',
        name: 'managerID',
        message: 'What is the team managers ID number?',
        validate: (value) => {
            if(value){
                return true
            }else{
                return "Please enter a value to continue"
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the team managers email?',
        validate: (value) => {
            if(value){
                return true
            }else{
                return "Please enter a value to continue"
            }
        }
    },
    {
        type: 'input',
        name: 'managerOfficeNum',
        message: 'What is the team managers office number?',
        validate: (value) => {
            if(value){
                return true
            }else{
                return "Please enter a value to continue"
            }
        }
    },
    

];
inquirer
  .prompt(questions)
  .then((data) => {
      console.log(data);
       return workers(data);
      //console.log(data.projectName)
      // const dataset = (JSON.stringify(answers, null, '  '));
      // console.log(dataset);
      // console.log(dataset);
      
  })
  .catch((error) => {
    if (error.isTtyError) {
      return "Prompt couldn't be rendered in the current environment"
    } else {
      return "Something else went wrong"
    }
  });
const workers = data => {
    const jim = new Manager(data.teammanager, data.managerID, data.managerEmail, data.officeNum);

    console.log(jim);
    const e = new Engineer()
}

// const employees = workers.map()
// console.log(employees);

// employees.forEach(employee => {
// console.log(employee);
// });



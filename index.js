var inquirer = require("inquirer");
var fs = require("fs");
const { object } = require("webidl-conversions");

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

    }
}

const e = new Employee("jim", 47, "test@test.com");
e.getName();
e.getId();
e.getEmail();
e.getRole();
class Manager extends Employee{
    constructor(name, id, email, officeNum){
        super(name, id, email);
            this.officeNum = officeNum;

    }
}
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
            this.github = github;

    }
    getGitHub(){
        const engineer = new Engineer(this.github)

    }
}
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
            this.school = school;

    }
    getSchool(){

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





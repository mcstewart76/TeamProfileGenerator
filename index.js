const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

var inquirer = require("inquirer");




//var fs = require("fs");


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



const manQuestions = [
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
    {
        type: 'list',
        name: 'addEmployee',
        message: 'Select one of the options below.',
        choices: ['Add Engineer', 'Add Intern', 'Finished building team'],
        
    },
    

];

// const workers = data => {
//     const theManager = new Manager(data.teammanager, data.managerID, data.managerEmail, data.managerOfficeNum);

// }
let team = [];

function askQuestions(){
    inquirer
    .prompt(manQuestions)
    .then((data) => {
        console.log(data);
        const theManager = new Manager(data.teammanager, data.managerID, data.managerEmail, data.managerOfficeNum);
        console.log(theManager.getRole());
        team.push(theManager);
        console.log(`team = ` + team[0])
        return theManager;
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
}
askQuestions(); 



// const employees = workers.map()
// console.log(employees);

// employees.forEach(employee => {
// console.log(employee);
// });



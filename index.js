const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

var inquirer = require("inquirer");

intern = new Intern;
engineer = new Engineer;
employee = new Employee;


var fs = require("fs");


const managers = [];
const engineers = [];
const interns = [];
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
    
    

];
const moreMembers = [{
    type: 'list',
    name: 'addEmployee',
    message: 'Select one of the options below.',
    choices: ['Add Engineer', 'Add Intern', 'Finished building team'],
    
}];
const engQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the engineers name?',
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
        name: 'engineerID',
        message: 'What is the engineers ID number?',
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
        name: 'engineerEmail',
        message: 'What is the engineers email?',
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
        name: 'engineerGithub',
        message: 'What is the engineers GitHub?',
        validate: (value) => {
            if(value){
                return true
            }else{
                return "Please enter a value to continue"
            }
        }
    },
]

const intQuestions = [
    {
        type: 'input',
        name: 'InternName',
        message: 'What is the Interns name?',
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
        name: 'internID',
        message: 'What is the Interns ID number?',
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
        name: 'internEmail',
        message: 'What is the interns email?',
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
        name: 'internSchool',
        message: 'What is the interns school name?',
        validate: (value) => {
            if(value){
                return true
            }else{
                return "Please enter a value to continue"
            }
        }
    },
]
// const workers = data => {
//     const theManager = new Manager(data.teammanager, data.managerID, data.managerEmail, data.managerOfficeNum);

// }


// function askQuestions(){
//     return new Promise((resolve, reject) => {
//     inquirer
//     .prompt(manQuestions)
//     .then((data) => {
//         console.log(data);
//         const theManager = new Manager(data.teammanager, data.managerID, data.managerEmail, data.managerOfficeNum);
//         console.log(theManager.getRole());
//         team.push(theManager);
//        // console.log(`team = ` + team[0])
//         return data
        
//         //console.log(data.projectName)
//         // const dataset = (JSON.stringify(answers, null, '  '));
//         // console.log(dataset);
//         // console.log(dataset);
        
//     })
//     .catch((error) => {
//         if (error.isTtyError) {
//         return "Prompt couldn't be rendered in the current environment"
//         } else {
//         return "Something else went wrong"
//         }
//     });
//     }
    
//     )};
function askMoreMembers2() {
    
     return   inquirer
        .prompt(moreMembers)
        .then((ismore) => {
         //   console.log(ismore.addEmployee)
         return ismore
        }).then((responseForMore) => {
            if(responseForMore.addEmployee == "Add Engineer"){
                askEngineer();
            }if(responseForMore.addEmployee == "Add Intern"){
                askIntern();
            }if(responseForMore.addEmployee == "Finished building team"){
                console.log("creating HTML")
               // docCreate();
            }
    })
            
    };

function askQuestions() {
    
     return   inquirer
        .prompt(manQuestions)
        .then((data) => {
        return data
        
    })
            
            
        
    };

// function askMoreMembers(){
//     inquirer
//     .prompt(moreMembers)
//     .then((ismore) => {
        
        
//        // console.log(`team = ` + team[0])
//         return ismore
        
//     })
//     .catch((error) => {
//         if (error.isTtyError) {
//         return "Prompt couldn't be rendered in the current environment"
//         } else {
//         return "Something else went wrong"
//         }
//     });
// }
function askEngineer(){
    
    return   inquirer
        .prompt(engQuestions)
        .then((engdata) => {
            
            const nameOfEngineer = new Engineer(engdata.engineerName, engdata.engineerID, engdata.engineerEmail, engdata.engineerGithub)
             
            engineers.push(nameOfEngineer);
            console.log(engineers)
            console.log("engineer added")
            askMoreMembers2();
        return engineers
    
    
    });
}
function askIntern(){
    console.log("intern added")
    return   inquirer
        .prompt(intQuestions)
        .then((intdata) => {
            const intern = new Intern(intdata.internname, intdata.internID, intdata.internEmail, intdata.internSchool )
            interns.push(intern);
            console.log(interns)
            askMoreMembers2();
    return "yay Intern"
        });
}
function docCreate(){
    console.log("html makin")
    return "doc in progress"
}

    
function htmlgen (){

 `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <link href="css/styles.css" rel="stylesheet" />
    <script src="index.js" defer></script>

    <title>Team Profile Generator</title>
</head>
<body>
    <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1 ">Team Profile Generator</span>
      </nav>
    <div class="container mx-auto mt-4">
        <div class="row">
            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                    
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</a>
                        <a href="#" class="btn "><i class="fab fa-github"></i> Github</a>
                    </div>
                </div>
            </div>
            
            
    
            
           
        </div>
    </div>
    
</body>
</html>`
};
function htmlcard() {
const card = `
<div class="row">
<div class="col-md-4">
    <div class="card" style="width: 18rem;">
        
        <div class="card-body">
            <h5 class="card-title"></h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
            <a href="#" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</a>
            <a href="#" class="btn "><i class="fab fa-github"></i> Github</a>
        </div>
    </div>
</div>`    
};

const runner = async () => {
const askQ = await askQuestions();
managers.push(askQ)
// console.log(askQ)
const moreQ = await askMoreMembers2();
// console.log(moreQ)

// await htmlgen();
// await htmlcard();
}
runner();









// // const employees = workers.map()
// // console.log(employees);

// // employees.forEach(employee => {
// // console.log(employee);
// // });





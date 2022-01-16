const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

var inquirer = require("inquirer");

var fs = require('fs');


;
const htmlstring = [`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    
    <link href="css/styles.css" rel="stylesheet" />
    <script src="index.js" defer></script>

    <title>Team Profile Generator</title>
</head>
<body>
    <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1 ">Team Profile Generator</span>
      </nav>
<div id="newCard">`]

const manQuestions = [
    {
        type: 'input',
        name: 'teamManager',
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
        name: 'managerOfficeNumber',
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
        name: 'internName',
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

function askMoreMembers() {
    
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
                console.log("HTML has been generated @ index.html under dist")
                docCreate("index.html", htmlstring.join() );
            }
    })
            
    };

function askQuestions() {
    
     return   inquirer
        .prompt(manQuestions)
        .then((data) => {
            const nameOfManager = new Manager(data.teamManager, data.managerID, data.managerEmail, data.managerOfficeNumber)
            
                const manCard = `
                <div class="container mx-auto mt-4">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card" style="width: 18rem;">
                                
                                <div class="card-body">
                                    <h5 class="card-title">${nameOfManager.constructor.name}</h5>
                                    <h5 class="card-title">${nameOfManager.name}</h5>
                                    <h6 class="card-text">Employee ID: ${nameOfManager.id}</h6>
                                    <h6 class="card-text">Office Number: ${nameOfManager.officeNumber}</h6>
                                    <a href="mailto: ${nameOfManager.email}" class="btn mr-2"><i class="fas fa-link"></i>Email: ${nameOfManager.email}</a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`  
              htmlstring.push(manCard);
              //console.log(htmlstring)
              return htmlstring
            
       
        
    })
    };


function askEngineer(){
    
    return   inquirer
        .prompt(engQuestions)
        .then((engdata) => {
            
            const nameOfEngineer = new Engineer(engdata.engineerName, engdata.engineerID, engdata.engineerEmail, engdata.engineerGithub)
            const engCard = `
    <div class="container mx-auto mt-4">
        <div class="row">
            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                    
                    <div class="card-body">
                        <h5 class="card-title">${nameOfEngineer.constructor.name}</h5>
                        <h5 class="card-title">${nameOfEngineer.name}</h5>
                        <p class="card-text">Employee ID: ${nameOfEngineer.id}</p>
                        <a href="mailto: ${nameOfEngineer.email}" class="btn mr-2"><i class="fas fa-link"></i>Email: ${nameOfEngineer.email}</a>
                        <a href="https://github.com/${nameOfEngineer.github}" class="btn "><i class="fab fa-github"></i>GitHub: ${nameOfEngineer.github}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`  
  htmlstring.push(engCard); 
  console.log("Engineer added!")
            askMoreMembers();
        return htmlstring
    
    
    });
}
function askIntern(){
    
    return   inquirer
        .prompt(intQuestions)
        .then((intdata) => {
            const intern = new Intern(intdata.internName, intdata.internID, intdata.internEmail, intdata.internSchool )
           
                const intCard = `
                <div class="container mx-auto mt-4">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card" style="width: 18rem;">
                                
                                <div class="card-body">
                                    <h5 class="card-title">${intern.constructor.name}</h5>
                                    <h5 class="card-title">${intern.name}</h5>
                                    <p class="card-text">Employee ID: ${intern.id}</p>
                                    <p class="card-text">School: ${intern.school}</p>
                                    <a href="mailto: ${intern.email}" class="btn mr-2"><i class="fas fa-link"></i> ${intern.email}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`  
              htmlstring.push(intCard);
              console.log("Intern added!")
            askMoreMembers();
    return "yay Intern"
        });
}



const runner = async () => {
const managerInfo = await askQuestions();
//managercard(askQ);
console.log("Manager has been added!")

const moreQ = await askMoreMembers();
const docmake = await docCreate();
// console.log(moreQ)

// await htmlgen();
// await htmlcard();
}
runner();

function docCreate(filename, link){
    return new Promise((resolve, reject) => {

        fs.writeFile(`./dist/${filename}`,
         link + `</div> 
        <script src="../index.js"></script>   
        </body>
        </html>`,
        
        function (err) {
          if (err) reject(err);
          else resolve()
  
        })
  
      })
    
    
}






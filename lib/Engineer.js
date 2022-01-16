const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
            this.github = github;

    }
    getGitHub(){
        // const engineer = new Engineer(this.github)
        // console.log(this.github)
        // console.log(engineer.github)
        return this.github;
        

    }
    getRole(){
        // const employeeName = new Engineer();
        // console.log(employeeName.constructor.name)
        return employeeName.constructor.name
    }
}

function engineercard() {
    const engCard = `
    <div class="container mx-auto mt-4">
        <div class="row">
            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                    
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <p class="card-text">Employee ID: ${this.id}</p>
                        <a href="mailto: ${this.email}" class="btn mr-2"><i class="fas fa-link"></i> ${this.email}</a>
                        <a href="#" class="btn "><i class="fab fa-github"></i> ${this.github}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`  
  $("#addCard").append(engCard);
    };

module.exports = Engineer;
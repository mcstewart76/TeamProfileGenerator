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

function interncard() {
    const intCard = `
    <div class="container mx-auto mt-4">
        <div class="row">
            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                    
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <p class="card-text">Employee ID: ${this.id}</p>
                        <a href="mailto: ${this.email}" class="btn mr-2"><i class="fas fa-link"></i> ${this.email}</a>
                        <a href="#" class="btn "><i class="fab fa-github"></i> ${this.school}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`  
  $("#addCard").append(intCard);
}
module.exports = Intern;
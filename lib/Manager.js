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

function managercard() {
    const manCard = `
    <div class="container mx-auto mt-4">
        <div class="row">
            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                    
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <h6 class="card-text">Employee ID: ${this.id}</h6>
                        <h6 class="card-text">Office Number: ${this.officeNum}</h6>
                        <a href="mailto: ${this.email}" class="btn mr-2"><i class="fas fa-link"></i> ${this.email}</a>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>`  
  $("#addCard").append(manCard);
}
module.exports = Manager;
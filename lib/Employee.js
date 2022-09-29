 class Employee {
 constructor(namer, id, email){
        this.namer = namer;
        this.id = id;
        this.email = email;
    }
    getNamer(){
        return this.namer;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}
module.exports = Employee;
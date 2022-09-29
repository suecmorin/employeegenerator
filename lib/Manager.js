const Employee = require('./Employee');
class Manager extends Employee {
constructor(namer, id, email, officeNumber){
   super(namer, id, email);
   this.officeNumber = officeNumber;
}
getofficeNumber(){
    return this.officeNumber;
}
getRole(){
    return "Manager";
}
}
module.exports = Manager;
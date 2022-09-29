const Employee = require('./Employee');
class Intern extends Employee {
constructor(namer, id, email, school){
   super(namer, id, email);
   this.school = school;
}
getschool(){
    return this.school;
}
getRole(){
    return "Intern";
}
}
module.exports = Intern;

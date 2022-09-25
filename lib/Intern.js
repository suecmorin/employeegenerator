const emp = require('./lib/Employee');
class Intern extends Employee {
constructor(name, id, email, school){
   super(name, id, email);
   this.school = school;
}
getschool(){
    return this.school;
}
getemployeeType(){
    return "Intern";
}
}
module.exports = Intern;

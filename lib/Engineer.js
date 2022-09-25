const emp = require('./lib/Employee');
class Engineer extends Employee {
constructor (name, id, email, github) {
   super(name, id, email);
    this.github = github;
}
getgithub(){
    return this.github;
}
getemployeeType() {
    return "Engineer";
}
}
module.exports = Engineer;

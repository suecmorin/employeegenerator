const Employee = require('./Employee');
class Engineer extends Employee {
constructor (namer, id, email, github) {
   super(namer, id, email);
    this.github = github;
}
getgithub(){
    return this.github;
}
getRole() {
    return "Engineer";
}
}
module.exports = Engineer;

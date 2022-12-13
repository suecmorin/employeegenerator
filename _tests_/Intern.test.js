const Intern = require('../lib/Intern');




test("tests getschool function", () => {
    const  school = "WPI";
    const employee = new Intern("John Doe", "12", "johndoe@gmail.com", school);
    expect(employee.getschool()).toBe(school);
   
});

test("tests getRole function", () => {
    const internTest = "Intern";
    const employee = new Intern("John Doe", "12", "johndoe@gmail.com", internTest);
    expect(employee.getRole()).toBe(internTest);
});
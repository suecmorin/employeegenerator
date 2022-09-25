const Intern = require('../lib/Intern.js');

//tests inquirer
test("Can create an new intern.", () => {
    const intern = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("tests getschool function", () => {
    const  school = "WPI";
    const employee = new Employee("John Doe", "12", "johndoe@gmail.com", "WPI");
    expect(employee.getschool()).toBe(school);
   
});

test("tests getRole function", () => {
    const intern = "Intern";
    const employee = new Employee("John Doe", "12", "johndoe@gmail.com", "WPI");
    expect(employee.getRole()).toBe(intern);
});
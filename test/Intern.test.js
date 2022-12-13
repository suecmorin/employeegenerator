const Intern = require('../lib/Intern.js');

//tests inquirer
test("Can create an new intern.", () => {
    const intern = new Employee(Name);
    expect(typeof(employee)).toBe("object");
});

test("tests getschool function", () => {
    const  school = "WPI";
    const employee = new Employee("John Doe", "12", "johndoe@gmail.com", "WPI");
    expect(employee.getschool()).toBe(school);
   
});

test("tests getRole function", () => {
    const InternTest = "Intern";
    const employee = new Intern("John Doe", "12", "johndoe@gmail.com", InternTest);
    expect(employee.getRole()).toBe(InternTest);
});
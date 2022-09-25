const Engineer = require('../lib/Engineer.js');

//tests inquirer
test("Can create an new engineer.", () => {
    const engineer = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("tests getgithub function", () => {
    const  github = "johndoe";
    const employee = new Employee("John Doe", "12", "johndoe@gmail.com", "johndoe");
    expect(employee.getgithub()).toBe(github);
   
});

test("tests getRole function", () => {
    const engineer = "Engineer";
    const employee = new Employee("John Doe", "12", "johndoe@gmail.com", "johndoe");
    expect(employee.getRole()).toBe(engineer);
});
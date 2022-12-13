const Employee = require('../lib/Employee.js');

//tests inquirer
test("Can create an new employee.", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("tests getName function", () => {
    const Name = "John Doe";
    const employee = new Employee(Name);
    expect(employee.getName()).toBe(Name);
   
});

test("gets id from getId() function", () => {
    const testId = "12";
    const employee = new Employee("John Doe", testId);
    expect(employee.getId()).toBe(testId);
});
test("gets id from getemail() function", () => {
    const testemail = "johndoe@gmail.com";
    const employee = new Employee("John Doe", "12", testemail);
    expect(employee.getEmail()).toBe(testemail);
});

test('test getRole() function', () => {
    const testgetRole = "Employee"
    const employee = new Employee("john Doe", "12", "johndoe@gmail.com", testgetRole);
    expect(employee.getRole()).toBe(testgetRole);
});

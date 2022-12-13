const Employee = require('../lib/Employee');

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
test("gets email from getemail() function", () => {
    const testEmail = "johndoe@gmail.com";
    const employee = new Employee("John Doe", "12", testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});

test('test getRole() function', () => {
    const testRole = "Employee"
    const employee = new Employee("john Doe", "12", "johndoe@gmail.com");
    expect(employee.getRole()).toBe(testRole);
});


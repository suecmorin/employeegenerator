const Employee = require('../lib/Employee.js');

//tests inquirer
test("Can create an new employee.", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("tests getName function", () => {
    const name = "John Doe";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
   
});

test("gets id from getId() function", () => {
    const testId = "12";
    const employee = new Employee("John Doe", testId);
    expect(employee.getId()).toBe(testId);
});


test('test getRole() function', () => {
    const testgetRole = "Employee"
    const employee = new Employee("john Doe, "12", "johndoe@gmail.com");
    expect(employee.getRole()).toBe(testgetRole);
});


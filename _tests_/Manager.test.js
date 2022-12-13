const Manager = require('../lib/Manager');




test("tests getofficeNumber function", () => {
    const  officeNumber = "65";
    const employee = new Manager("John Doe", "12", "johndoe@gmail.com", officeNumber );
    expect(employee.officeNumber).toBe(officeNumber);
   
});

test("tests getRole function", () => {
    const testRole = "Manager";
    const employee = new Manager("John Doe", "12", "johndoe@gmail.com", testRole );
    expect(employee.getRole()).toBe(testRole);
});
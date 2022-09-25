const Manager = require('../lib/Manager.js');


//tests inquirer
test("Can create an new manager.", () => {
    const manager = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("tests getofficeNumber function", () => {
    const  officenumber = "65";
    expect(employee.getofficeNumber()).toBe(officenumber);
   
});

test("tests getRole function", () => {
    const manager = "Manager";
    const employee = new Employee("John Doe", "12", "johndoe@gmail.com", "65" );
    expect(employee.getRole()).toBe(manager);
});
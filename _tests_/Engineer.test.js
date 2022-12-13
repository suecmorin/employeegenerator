const Engineer = require('../lib/Engineer');

test("tests getgithub function", () => {
    const  githubAcct = "johnDoe";
    const employee = new Engineer("John Doe", "12", "johndoe@gmail.com", githubAcct);
    expect(employee.getgithub()).toBe(githubAcct);
   
});

test("tests getRole function", () => {
    const engineer = "Engineer";
    const employee = new Engineer("John Doe", "12", "johndoe@gmail.com", "github");
    expect(employee.getRole()).toBe(engineer);
});
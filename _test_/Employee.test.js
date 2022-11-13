//Test to make sure data from inquirer can be added to a constructor object
const Employee = require('../lib/Employee')

describe('Employee', () => {
    it("should create an 'object' with a 'name', 'id', and 'email'", () => {
    const employee = new Employee('bob', 5, 'blob@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    });
});

//testing fuction to see that the data recieved is a string and also not number
    describe("getName", () =>{
        it("should return a 'Name' value that is a 'string'", () => {
            const name = "Bob"
            const obj = new Employee(name);
      
            expect(obj.getName()).toEqual(expect.any(String));
          });
      
          it("should be a 'string' and not a 'number'", () => {
            const name = "bob";
      
            const obj = new Employee(name);
      
            expect(obj.getName()).not.toEqual(expect.any(Number));
          });
        });

//testing to make sure the data recieved is a number
        describe("getID", () => {
          it("should return a value that is a 'number'", () => {
            const id = 5
            const obj = new Employee('bob', id);
      
            expect(obj.getId()).toEqual(expect.any(Number));
          });
        });

//testing fuction to see that the data recieved is a string and also not number
        describe("getEmail", () =>{
            it("should return a 'Email' value that is a 'string'", () => {
                const email = "Bob@bob.com"
                const obj = new Employee("bob", 5, email);
          
                expect(obj.getEmail()).toEqual(expect.any(String));
              });
          
              it("should be a 'string' and not a 'number'", () => {
                const email = "Bob@bob.com";
          
                const obj = new Employee("bob", 5, email);
          
                expect(obj.getEmail()).not.toEqual(expect.any(Number));
              });
            });

//testing to see that the function returns the proper role
        describe("getRole", () => {
            it("should return with the value of 'employee'", () => {
                obj = new Employee("bob", 5, "blah@gmail.com")
            
                expect(obj.getRole()).toEqual("employee");
            });
          });
const Manager = require('../lib/Manager')

describe("getOfficeNumber", () =>{
        it("should return a value that is a 'number'", () => {
            const officeNumber = 6666666
            const obj = new Manager('bob', 5, 'bob@bob.com', officeNumber);
      
            expect(obj.getOfficeNumber()).toEqual(expect.any(Number));
          });
    });

    describe("getRole", () => {
        it("should return with the value of 'employee'", () => {
            obj = new Manager("bob", 5, "blah@gmail.com")
        
            expect(obj.getRole()).toEqual("Manager");
        });
      });
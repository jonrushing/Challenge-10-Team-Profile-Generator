const Intern = require('../lib/Intern')

//testing fuction to see that the data recieved is a string and also not number
describe("getschool", () =>{
    it("should return a 'school' value that is a 'string'", () => {
        const school = "NYU"
        const obj = new Intern('bob', 7, 'bob@gmail.com', school);
  
        expect(obj.getschool()).toEqual(expect.any(String));
      });
  
      it("should be a 'string' and not a 'number'", () => {
        const school = "NYU"
        const obj = new Intern('bob', 7, 'bob@gmail.com', school);
  
  
        expect(obj.getschool()).not.toEqual(expect.any(Number));
      });
    });

//testing to see that the function returns the proper role
    describe("getRole", () => {
        it("should return with the value of 'Intern'", () => {
            obj = new Intern("bob", 5, "blah@gmail.com")
        
            expect(obj.getRole()).toEqual("Intern");
        });
      });
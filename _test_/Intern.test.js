const Intern = require('../lib/Intern')


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

    describe("getRole", () => {
        it("should return with the value of 'Intern'", () => {
            obj = new Intern("bob", 5, "blah@gmail.com")
        
            expect(obj.getRole()).toEqual("Intern");
        });
      });
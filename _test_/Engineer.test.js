const Engineer = require('../lib/Engineer')


describe("getGitHub", () =>{
    it("should return a 'github' value that is a 'string'", () => {
        const github = "Bob"
        const obj = new Engineer('bob', 7, 'bob@gmail.com', github);
  
        expect(obj.getGithub()).toEqual(expect.any(String));
      });
  
      it("should be a 'string' and not a 'number'", () => {
        const github = "Bob"
        const obj = new Engineer('bob', 7, 'bob@gmail.com', github);
  
  
        expect(obj.getGithub()).not.toEqual(expect.any(Number));
      });
    });

    describe("getRole", () => {
        it("should return with the value of 'Engineer'", () => {
            obj = new Engineer("bob", 5, "blah@gmail.com")
        
            expect(obj.getRole()).toEqual("Engineer");
        });
      });
  
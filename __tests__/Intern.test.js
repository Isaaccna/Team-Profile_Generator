const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Initialization", () =>{
        it("should create a new Intern object", ()=>{

            const intern = new Intern('3','Kevin','Kevin@gmail.com','Monash University');
            expect(intern.id).toEqual('3');
            expect(intern.name).toEqual('Kevin');
            expect(intern.email).toEqual('Kevin@gmail.com');
            expect(intern.school).toEqual('Monash University');

        });
    });

    it("should return intern school", ()=> {
        const school = 'Monash University';
        const intern = new Intern('3','Kevin','Kevin@gmail.com',school);
        expect(intern.getSchool()).toEqual(school);
    });

    it("should return intern role", ()=>{
        const role="Intern";
        const intern = new Intern('3','Kevin','Kevin@gmail.com','Monash University');
        expect(intern.getRole()).toBe(role);
    })
});
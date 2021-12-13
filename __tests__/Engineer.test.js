const Engineer = require("../lib/Engineer");

describe("Engineer", ()=>{
    describe("Intialization", () =>{
        it("should create a new Engineer object", () =>{
            const engineer = new Engineer('2','Sarah','Sarah@gmail.com','Sarah007');
            expect(engineer.id).toEqual('2');
            expect(engineer.name).toEqual('Sarah');
            expect(engineer.email).toEqual('Sarah@gmail.com');
            expect(engineer.github).toEqual('Sarah007');
        });
    });

    it("should return engineer github", ()=>{

        const github = 'Sarah007';
        const engineer = new Engineer('2','Sarah','Sarah@gmail.com',github);
        expect(engineer.getGithub()).toEqual(github)

    });

    it("should retun engineer role", () => {

        const role='Engineer';
        const engineer = new Engineer('2','Sarah','Sarah@gmail.com','Sarah007');
        expect(engineer.getRole()).toEqual(role);

    });

});
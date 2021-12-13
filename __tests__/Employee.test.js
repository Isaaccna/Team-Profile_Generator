const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
      it("should create a new employee object and return Employee details", () => {
        const employee = new Employee(1, "John", "John@gmail.com");
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.email).toEqual("John@gmail.com");
    });
});
        it("should return employee name", () => {
            const name = "John";
            const employee = new Employee("1", name, "John@gmail.com");
            expect(employee.getName()).toEqual(name);
          });
        
          it("should return employee id", () => {
            const id = 1;
            const employee = new Employee(id, "John", "John@gmail.com");
            expect(employee.getId()).toBe(id);
          });
        
          it("should return employee email", () => {
            const email = "John@gmail.com";
            const employee = new Employee("1", "John", email);
            expect(employee.getEmail()).toBe(email);
          });
        
          it("should return employee role", () => {
            const role = "Employee";
            const employee = new Employee("1", "John", "John@gmail.com");
            expect(employee.getRole()).toBe(role);
          });
      })

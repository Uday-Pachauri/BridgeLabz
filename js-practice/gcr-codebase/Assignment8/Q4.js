class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return this.name + " is working in " + this.department;
    }
}

class Manager extends Employee {
    work() {
        return this.name + " is managing the " + this.department + " department";
    }
}

let e1 = new Employee("Rahul", "IT");
let e2 = new Manager("Aman", "HR");

console.log(e1.work());
console.log(e2.work());
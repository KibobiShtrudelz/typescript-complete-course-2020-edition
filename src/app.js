// tsc --target es6 app.ts --watch
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    static createEmployee(name) {
        return { name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Department - ID:", this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found!");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value!");
        }
        this.addReport(value);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            // Here "AccountingDepartment.instance" and "this.instance" are the same
            return AccountingDepartment.instance;
            // returning the instance we already hav, if not - down below return a created new one
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    }
    describe() {
        console.log("Accounting Department - ID: ", this.id);
    }
    addEmployee(name) {
        if (name === "Peci") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee_1 = Department.createEmployee("Peckata");
console.log(employee_1, Department.fiscalYear);
const it = new ITDepartment("d1", ["Peci"]);
it.addEmployee("Peci");
it.addEmployee("Meci");
it.describe();
it.printEmployeeInformation();
console.log(it);
// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
console.log(accounting);
const accounting2 = AccountingDepartment.getInstance(); // same as accounting because no new instance is created
console.log(accounting2);
accounting.mostRecentReport = "W@z@@@@@"; // the "set" properties are called as properties, not function calls!
accounting.addEmployee("Peci");
accounting.addEmployee("IT Peci");
accounting.addReport("Minority Report");
console.log(accounting.mostRecentReport); // the "get" properties are called as properties, not function calls!
accounting.printReports();

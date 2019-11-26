// tsc --target es6 app.ts --watch

abstract class Department {
  static fiscalYear = 2020;
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }

  describe() {
    console.log("IT Department - ID:", this.id);
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

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error("No report found!");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }

    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  describe() {
    console.log("Accounting Department - ID: ", this.id);
  }

  addEmployee(name: string) {
    if (name === "Peci") {
      return;
    }

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("d2", []);

accounting.mostRecentReport = "W@z@@@@@"; // the "set" properties are called as properties, not function calls!
accounting.addEmployee("Peci");
accounting.addEmployee("IT Peci");

accounting.addReport("Minority Report");
console.log(accounting.mostRecentReport); // the "get" properties are called as properties, not function calls!
accounting.printReports();

console.log(accounting);

// const accountingCopy = { name: "copied name", describe: accounting.describe };

// accountingCopy.describe();

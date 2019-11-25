class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

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
}

const it = new ITDepartment("d1", ["Peci"]);

it.addEmployee("Peci");
it.addEmployee("Meci");

it.describe();
it.printEmployeeInformation();

console.log(it);

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReports(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("d2", ["Minority Report"]);

accounting.addEmployee("IT Peci");
accounting.addEmployee("IT Meci");

accounting.addReports("Not so minority report");
accounting.printReports();

console.log(accounting);

// const accountingCopy = { name: "copied name", describe: accounting.describe };

// accountingCopy.describe();

// class Department {
//   name: string;
//   private employees: string[] = [];

//   constructor(n: string) {
//     this.name = n;
//   }

//   describe(this: Department) {
//     console.log("Department:", this.name);
//   }

//   addEmployee(employee: string) {
//     this.employees.push(employee)
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// const accounting = new Department("Accounting");

// accounting.addEmployee("Peci");
// accounting.addEmployee("Meci");

// accounting.describe();
// accounting.printEmployeeInformation();

// // const accountingCopy = { name: "copied name", describe: accounting.describe };

// // accountingCopy.describe();

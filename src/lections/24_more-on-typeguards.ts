// // tsc --target es6 app.ts --watch

// // Intersection Types - they allow us to combine other types. They are very close to Interface inheritanse.
// // intersection operator is "&", example: type ElevatedEmployee = Admin & Employee;
// // Type Guards - they helps us with union types

// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee; // Now ElevatedEmployee has both types

// const e1: ElevatedEmployee = {
//   name: "Pepo",
//   privileges: ["create-server"],
//   startDate: new Date()
// };

// type Combinable = string | number;

// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// function add(a: Combinable, b: Combinable) {
//   // this is kind of type guard that use typeof
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }

//   return a + b;
// }

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInfo(employee: UnknownEmployee) {
//   console.log("Name:", employee.name);

//   if ("privileges" in employee) {
//     console.log("Privileges:", employee.privileges);
//   }

//   if ("startDate" in employee) {
//     console.log("Start Date:", employee.startDate);
//   }
// }

// // printEmployeeInfo(e1);
// printEmployeeInfo({ name: "Manu", startDate: new Date() });

// class Car {
//   drive() {
//     console.log("Driving...")
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a truck...")
//   }

//   loadCargo(amount: number) {
//     console.log("Loading cargo...", amount)
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();

//   if ("loadCargo" in vehicle || vehicle instanceof Truck) {
//     vehicle.loadCargo(1000)
//   }
// }

// useVehicle(v1);
// useVehicle(v2)

// // Intersection Types - they allow us to combine other types. They are very close to Interface inheritanse.
// // intersection operator is "&", example: type ElevatedEmployee = Admin & Employee;

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

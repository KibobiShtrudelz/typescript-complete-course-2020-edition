// // tsc --target es6 app.ts --watch

// // Decorator - just a function that's applied to something (class) in a surtain way.
// // Decorators execute when our class is DEFINED! Not when it's instansiated.
// function Logger(constructor: Function) {
//   console.log("Logging...");
//   console.log(constructor);
// }

// // "@" is a special char that TS indicates as creating Decorator.
// // It's not the only way to create one
// @Logger
// class Person {
//   name = "Pecimir";
//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const person = new Person();
// console.log(person);

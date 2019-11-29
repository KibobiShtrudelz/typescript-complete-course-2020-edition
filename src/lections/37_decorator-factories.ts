// // tsc --target es6 app.ts --watch

// // The Decorator factory returns a Decorator function but allows us to configure it
// // when we asign it as a Decorator to something
// function Logger(logString: string) {
//   return function(constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   return function(constructor: any) {
//     // if we don't need constructor as argument we just add "_"
//     const hookElement = <HTMLElement>document.getElementById(hookId);
//     const p = new constructor();

//     if (hookId) {
//       hookElement.innerHTML = template;
//       hookElement.querySelector("h3")!.textContent = p.name;
//     }
//   };
// }

// // @Logger("LOGGING - PERSON") // here we execute function that returns a Decorator
// @WithTemplate("<h3>My Person Object</h3>", "app")
// class Person {
//   name = "Pecimir";
//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const person = new Person();
// console.log(person);

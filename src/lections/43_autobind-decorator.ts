// // tsc --target es6 app.ts --watch

// function Autobind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
//   const originalMethod = descriptor.value;
//   const adjustedDescriptor: PropertyDescriptor = {
//     configurable: true,
//     enumerable: false,
//     get() {
//       const boundFunction = originalMethod.bind(this); // "this" will refer to the object which is defining the getter
//       return boundFunction;
//     }
//   };

//   return adjustedDescriptor;
// }

// class Printer {
//   message = "This works!";

//   @Autobind
//   showMessage() {
//     console.log(this.message);
//   }
// }

// const button = document.querySelector("button")!;
// const p = new Printer();
// button.addEventListener("click", p.showMessage); // if we don't use the @Autobind decorator we bind it to "p" because the this is refering to the click event target and not the p const anymore

// // target is any because we don't know if we are going to work with the prototype if we
// // an are dealing with an instance accessor or static one - the constructor function
// function Log(target: any, propertyName: string | Symbol) {
//   console.log("Property Decorator!");
//   console.log(target, propertyName);
// }

// function Log2(target: any, name: string, descriptor: PropertyDescriptor): PropertyDescriptor {
//   console.log("Accessor decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);

//   return {};
// }

// function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("Method decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log("Parameter decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(position);
// }

// class Product {
//   @Log
//   title: string;
//   _price: number;

//   @Log2
//   set price(value: number) {
//     if (value > 0) {
//       this._price = value;
//     } else {
//       throw new Error("Invalid price - should be positive!");
//     }
//   }

//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }

//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     // @Log4 is a parameter decorator
//     return this._price * (1 + tax);
//   }
// }

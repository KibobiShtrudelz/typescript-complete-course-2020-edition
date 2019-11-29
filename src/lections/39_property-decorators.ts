// // tsc --target es6 app.ts --watch

// function Log(target: any, propertyName: string | Symbol) {
//   console.log("Property Decorator!");
//   console.log(target, propertyName);
// }

// class Product {
//   @Log
//   title: string;
//   _price: number;

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

//   getPriceWithTax(tax: number) {
//     return this._price * (1 + tax);
//   }
// }

// // Function Return Types & "void"
// function add(n1: number, n2: number): number {
//   return n1 + n2;
// }

// function printResult(num: number): void {
//   console.log("Result:", num);
// }

// printResult(add(5, 12));

// // ------------------------------------------------------------------------------------------
// // Functions as Types

// // let combineValues: Function; // not good because it can take any function
// let combineValues: (n1: number, n2: number) => number; // more precise

// combineValues = add;

// console.log(combineValues(8, 8));

// // ------------------------------------------------------------------------------------------
// // Function Types & Callbacks

// function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
//   const result = n1 + n2;
//   cb(result);
// }

// addAndHandle(10, 20, result => {
//   console.log(result);
//   return result;
// });

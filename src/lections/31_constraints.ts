// tsc --target es6 app.ts --watch

// const names: Array<string> = ["Peco", "Kleco"]; // string[]
// names[0].split(" ");

// const promise: Promise<string | number> = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("This is done!");
//   }, 2000);
// });

// promise.then(data => {
//   if (typeof data === "string") {
//     console.log(data.split(" "));
//   } else {
//     console.log(data)
//   }
// });

// Custom Generic Types

// this way we can notate to specific prop in the objects because
// we declare in <> that this two objects are intercepting and
// therefor TS knows what props are going to be included. This way
// describe to TS what types we are going to use
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   // "extends object" declares that T MUST be of type object
//   return { ...objA, ...objB };
// }

// const mergeObj = merge({ name: "Pecimir", hobbies: ["Sports"] }, { age: 30 });
// console.log(JSON.stringify(mergeObj, null, 2));
// mergeObj.name;

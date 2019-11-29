// // class DataStorage {
// //   // this is the same as using a Generic function but it's wrong in terms
// //   // that here we say we can have either of these types but MIXED
// //   private data: (string[] | number[] | boolean[])[] = [];

// //   // with Union types we can receive any of these values but with the
// //   // Generics we stick to aspecific type
// //   addItem(item: string | number | boolean) {
// //     this.data.push(item);
// //   }

// //   removeItem(item: string | number | boolean) {
// //     if (this.data.indexOf(item) === -1) {
// //       return;
// //     }

// //     this.data.splice(this.data.indexOf(item), 1));
// //   }

// //   getItems() {
// //     return [...this.data];
// //   }
// // }

// // const textStorage = new DataStorage();
// // textStorage.addItem("Pecislav");
// // textStorage.addItem("Shishomir");
// // textStorage.addItem("Pecislav");
// // textStorage.removeItem("Pecislav");
// // console.log(JSON.stringify(textStorage.getItems(), null, 2));

// // const numberStorage = new DataStorage();
// // numberStorage.addItem(33);
// // numberStorage.addItem(58);
// // numberStorage.addItem(33);
// // numberStorage.removeItem(33);
// // console.log(JSON.stringify(numberStorage.getItems(), null, 2));

// // The difference here is we say from the start "choose ONE of these thre types" and
// // than work with only one of them. Generic types lockin a type.
// // Union types are good to use in a function when you have the possibility to work
// // with every written type in the pipes.
// class DataStorage<T extends string | number | boolean> {
//   // It's good idea to extend only primitiv values and if we need extend
//   // for objects, etc. to create another class which specializes in them
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }

//   removeItem(item: T) {
//     if (this.data.indexOf(item) === -1) {
//       return;
//     }

//     this.data.splice(this.data.indexOf(item), 1));
//   }

//   getItems() {
//     return [...this.data];
//   }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem("Pecislav");
// textStorage.addItem("Shishomir");
// textStorage.addItem("Pecislav");
// textStorage.removeItem("Pecislav");
// console.log(JSON.stringify(textStorage.getItems(), null, 2));

// const numberStorage = new DataStorage<number>();
// numberStorage.addItem(33);
// numberStorage.addItem(58);
// numberStorage.addItem(33);
// numberStorage.removeItem(33);
// console.log(JSON.stringify(numberStorage.getItems(), null, 2));

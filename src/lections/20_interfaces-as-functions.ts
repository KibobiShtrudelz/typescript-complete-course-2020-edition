// // In a few words an Interface describes the structure of an object
// interface AddFn {
//   (a: number, b: number): number;
// }

// let add: AddFn;

// add = (n_1: number, n_2: number) => n_1 + n_2;

// interface Named {
//   readonly name: string;
// }

// interface Greetable extends Named {
//   greet(phrase: string): void;
// }

// class Person implements Greetable {
//   name: string;
//   age = 30;

//   constructor(n: string) {
//     this.name = n;
//   }

//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   }
// }

// let user_1: Greetable;

// user_1 = new Person("Peco");

// user_1.greet("Wazaaaaa - I am");
// console.log("user_1", user_1);

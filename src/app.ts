// In a few words an Interface describes the structure of an object
// Interfaces are purely development TS features helping write better code.
// They do not compile to JS.
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n_1: number, n_2: number) => n_1 + n_2;

interface Named {
  readonly name?: string;
  outputName?: string; // methods also can be optional - myMethod?() {...}
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

let user_1: Greetable;

user_1 = new Person();

user_1.greet("Wazaaaaa - I am");
console.log("user_1", user_1);

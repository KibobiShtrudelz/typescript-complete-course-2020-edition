// tsc --target es6 app.ts --watch

function WithTemplate(template: string, hookId: string) {
  return function<T extends { new (...args: any[]): { name: string } }>(originalConstructor: T) {
    // this constructor is based on the original one
    return class extends originalConstructor {
      constructor(...args: any[]) {
        super();

        const hookElement = <HTMLElement>document.getElementById(hookId);

        if (hookId) {
          hookElement.innerHTML = template;
          hookElement.querySelector("h3")!.textContent = this.name;
        }
      }
    };
  };
}

// @Logger("LOGGING - PERSON") // here we execute function that returns a Decorator
@WithTemplate("<h3>My Person Object</h3>", "app")
class Person {
  name = "Pecimir";
  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();
console.log(JSON.stringify(person, null, 2));

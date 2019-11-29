// tsc --target es6 app.ts --watch
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function WithTemplate(template, hookId) {
    return function (originalConstructor) {
        // this constructor is based on the original one
        return class extends originalConstructor {
            constructor(...args) {
                super();
                const hookElement = document.getElementById(hookId);
                if (hookId) {
                    hookElement.innerHTML = template;
                    hookElement.querySelector("h3").textContent = this.name;
                }
            }
        };
    };
}
// @Logger("LOGGING - PERSON") // here we execute function that returns a Decorator
let Person = class Person {
    constructor() {
        this.name = "Pecimir";
        console.log("Creating person object...");
    }
};
Person = __decorate([
    WithTemplate("<h3>My Person Object</h3>", "app")
], Person);
const person = new Person();
console.log(JSON.stringify(person, null, 2));

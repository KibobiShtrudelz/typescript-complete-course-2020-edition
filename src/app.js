let add;
add = (n_1, n_2) => n_1 + n_2;
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("Hi!");
        }
    }
}
let user_1;
user_1 = new Person();
user_1.greet("Wazaaaaa - I am");
console.log("user_1", user_1);

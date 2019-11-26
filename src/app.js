let add;
add = (n_1, n_2) => n_1 + n_2;
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user_1;
user_1 = new Person("Peco");
user_1.greet("Wazaaaaa - I am");
console.log("user_1", user_1);

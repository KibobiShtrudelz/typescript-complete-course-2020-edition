"use strict";
// Objects
// const person: { name: string, age: number} = {
//   name: "Peter",
//   age: 30
// };
// console.log(person.name);
// This is better to aproach
const person = {
    name: "Peter",
    age: 30
};
// console.log(person);
// Arrays in objects
const persona = {
    name: "Peter",
    age: 30,
    hobbies: ["Sports", "Cooking"]
};
let favoriteActivities;
console.log(persona);
// Tuples
const personMan = {
    name: "Peter",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
};
console.log(personMan);
// Enums (assign labels to numbers). Example: enum { NEW, OLD }. NEW referes to 0, OLD to 1, etc.
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 1001] = "READ_ONLY";
    Role[Role["AUTHOR"] = 1002] = "AUTHOR";
})(Role || (Role = {}));
const personaMan = {
    name: "Peter",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.AUTHOR
};
if (personaMan.role === Role.AUTHOR) {
    console.log("is author");
}

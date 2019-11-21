"use strict";
const person = {
    name: "Peter",
    age: 30
};
const persona = {
    name: "Peter",
    age: 30,
    hobbies: ["Sports", "Cooking"]
};
let favoriteActivities;
console.log(persona);
const personMan = {
    name: "Peter",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
};
console.log(personMan);
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

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

let favoriteActivities: ["Sports"];

console.log(persona);

// Tuples
const personMan: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // this is a tuple
} = {
  name: "Peter",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"]
};

console.log(personMan);

// Enums (assign labels to numbers). Example: enum { NEW, OLD }. NEW referes to 0, OLD to 1, etc.

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 1001,
  AUTHOR
}

const personaMan = {
  name: "Peter",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.AUTHOR
};

if (personaMan.role === Role.AUTHOR) {
  console.log("is author");
}

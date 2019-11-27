// // Discriminated Unions

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;

//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;

//     case "horse":
//       speed = animal.runningSpeed;
//       break;

//     default:
//       speed = 0;
//       break;
//   }

//   console.log("Moving at speed:", speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 22 });

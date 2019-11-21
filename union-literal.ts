// Union Type
// function combine(input_1: number | string, input_2: number | string) {
//   let result: number | string;

//   if (typeof input_1 === "number" && typeof input_2 === "number") {
//     result = input_1 + input_2;
//   } else {
//     result = input_1.toString() + input_2.toString();
//   }

//   return result;
// }

// const combinedAges = combine(30, 26);
// console.log(combinedAges);

// const combinedNames = combine("Peci", "Meci");
// console.log(combinedNames);

// Literal Type - here we are very exact what value it should hold, not only the type.name
// example: const price = 2.88; so here is type 2.88 because is const and const never change.
function combine(
  input_1: number | string,
  input_2: number | string,
  resultConversion: "as-number" | "as-text" // additional safety
) {
  let result;

  if (
    (typeof input_1 === "number" && typeof input_2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input_1 + +input_2;
  } else {
    result = input_1.toString() + input_2.toString();
  }

  return result;

  // if (resultConversion === "as-number") {
  //   // return +result;
  //   return parseFloat(result);
  // } else {
  //   return result.toString();
  // }

  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Peci", "Meci", "as-text");
console.log(combinedNames);

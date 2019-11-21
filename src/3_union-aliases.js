"use strict";
// Union Type -------------------------------------------------------------------------
// function combine(input_1: number | string, input_2: number | string) {
//   let result: number | string;
function combine(input_1, input_2, resultConversion // additional safety
) {
    let result;
    if ((typeof input_1 === "number" && typeof input_2 === "number") ||
        resultConversion === "as-number") {
        result = +input_1 + +input_2;
    }
    else {
        result = input_1.toString() + input_2.toString();
    }
    return result;
}
const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
const combinedNames = combine("Peci", "Meci", "as-text");
console.log(combinedNames);

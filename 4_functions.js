// Function Return Types & "void"
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result:", num);
}
printResult(add(5, 12));
// ------------------------------------------------------------------------------------------
// Functions as Types
// let combineValues: Function; // not good because it can take any function
var combineValues; // more precise
combineValues = add;
console.log(combineValues(8, 8));
// ------------------------------------------------------------------------------------------
// Function Types & Callbacks
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});

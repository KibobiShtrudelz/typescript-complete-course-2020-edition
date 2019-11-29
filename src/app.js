// tsc --target es6 app.ts --watch
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
console.log(JSON.stringify(extractAndConvert({ name: "Kleshu" }, "name"), null, 2));

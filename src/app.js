// tsc --target es6 app.ts --watch
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add("Pe", " Ci");
result.split(" ");

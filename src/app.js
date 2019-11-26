// Intersection Types - they allow us to combine other types. They are very close to Interface inheritanse.
// intersection operator is "&", example: type ElevatedEmployee = Admin & Employee;
// Type Guards - they helps us with union types
const e1 = {
    name: "Pepo",
    privileges: ["create-server"],
    startDate: new Date()
};
function add(a, b) {
    // this is kind of type guard that use typeof
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(employee) {
    console.log("Name:", employee.name);
    if ("privileges" in employee) {
        console.log("Privileges:", employee.privileges);
    }
    if ("startDate" in employee) {
        console.log("Start Date:", employee.startDate);
    }
}
// printEmployeeInfo(e1);
printEmployeeInfo({ name: "Manu", startDate: new Date() });

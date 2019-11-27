// tsc --target es6 app.ts --watch
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
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("Loading cargo...", amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ("loadCargo" in vehicle || vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);

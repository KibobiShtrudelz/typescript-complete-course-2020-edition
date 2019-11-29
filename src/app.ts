// tsc --target es6 app.ts --watch

// creating generic class let us use it for different purposes
class DataStorage<T extends string | number | boolean> {
  // It's good idea to extend only primitiv values and if we need extend
  // for objects, etc. to create another class which specializes in them
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }

    this.data.splice(this.data.indexOf(item), 1));
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Pecislav");
textStorage.addItem("Shishomir");
textStorage.addItem("Pecislav");
textStorage.removeItem("Pecislav");
console.log(JSON.stringify(textStorage.getItems(), null, 2));

const numberStorage = new DataStorage<number>();
numberStorage.addItem(33);
numberStorage.addItem(58);
numberStorage.addItem(33);
numberStorage.removeItem(33);
console.log(JSON.stringify(numberStorage.getItems(), null, 2));

// const objectStorage = new DataStorage<object>();
// const kleshiObject = { name: "Kleshoslav"};
// objectStorage.addItem(kleshiObject);
// objectStorage.addItem({ name: "Pecimir" });
// objectStorage.removeItem(kleshiObject);
// console.log(JSON.stringify(objectStorage.getItems(), null, 2));

class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfString {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// Type inference with Generics - typescript is very intelligent
const arr = new ArrayOfAnything(["a", "b", "c"]);

// Example of generics with functions

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// <T> = convention name, could be <TypeOfArray>
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Can be confusing whether to put <string> or <string[]> in generic definition; <string[]> would return string[][] which is not what we want.
printAnything<string>(["a", "b", "c"]);
// Could technically drop the generic definition entirely here and leave it to type inference, however adding generic definition will help catch errors.

// Also helpful to add in type annotation manually on class/function return types all the time because it helps us check errors.

// Generic Constraints

class Car {
  print() {
    console.log("I am a car");
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}

// A constraint will tell TS that there will be a print() method available
// So that will make sure that whenever we try to call or otherwise reference printHousesOrCars we're always going to feed in a type that will have a print method available.
// Printable is a "constraint": telling TS whatever type <T> we put in here it will have a print() method that returns nothing at all.
interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}
// Error
printHousesOrCars([1, 2, 3, 4]);
// Success
printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
// This comes up all the time. 

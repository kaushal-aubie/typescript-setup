// enum type
enum mode {
  dev = "dev",
  prod = "prod",
}
const enumVal: mode = mode.dev;

// object
type person = { firstName: string };
let personVal: person = { firstName: "" };

//array
const arr: string[] = ["2", "5"];

//tuple
const arr2: [string, number, boolean] = ["2", 6, true];

//set
let myset: Set<number> = new Set<number>();
myset.add(5);

//map
let myMap: Map<number, string> = new Map<number, string>();
myMap.set(5, "8");

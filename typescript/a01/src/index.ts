import { Sorter } from "./Sorter";
// import { NumbersCollection } from "./NumbersCollection";
import { CharCollection } from "./CharCollection";

// const nCollection = new NumbersCollection([4, 6, 5, 2, 8, -20]);
// const sorter = new Sorter(nCollection);

const charCollection = new CharCollection("LeoNardO");

const sorter = new Sorter(charCollection);
sorter.sort();
console.log(sorter.collection);

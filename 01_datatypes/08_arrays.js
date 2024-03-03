let arr1 = [2,3,4,5,"ab"]
let arr2 = new Array(2,3,4,5,"ab")
console.log(arr1);  // [ 2, 3, 4, 5, 'ab' ]

// console.log(arr1[2]); // 4

// NOTE: JavaScript array-copy operations create shallow copies. 
// A shallow copy of an object is a copy whose properties share the same references

// arr1.push(6);
// console.log(arr1); [ 2, 3, 4, 5, 'ab', 6 ]

// arr1.pop();
// console.log(arr1); // [ 2, 3, 4, 5 ]

// arr1.unshift(24); // Elements to insert at the start of the array.
// console.log(arr1); // [ 24, 2, 3, 4, 5, 'ab' ]

// arr1.shift(); // Removes the first element from an array
// console.log(arr1); // [ 3, 4, 5, 'ab' ]

// console.log(arr1.includes(2)); // true
// console.log(arr1.indexOf(2)); // 0
// console.log(arr1.indexOf(123)); // -1

// let joinArr = arr1.join(); // Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(joinArr); // 2,3,4,5,ab (type: String)
// joinArr = arr1.join('-');
// console.log(joinArr); // 2-3-4-5-ab

let sliceArr = arr1.slice(1,3);  // indexes: 1,2. Not modifies current array
console.log(arr1); // [ 2, 3, 4, 5, 'ab' ]
console.log(sliceArr); // [ 3, 4 ]
let spliceArr = arr1.splice(1,3);  // indexes: 1,2,3. Modifies current array
console.log(arr1); // [ 2, 'ab' ]
console.log(spliceArr); // [ 3, 4, 5 ]

// Slice: Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

// Splice: Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.


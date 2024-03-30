let arr1 = ["a", "b", "c"];
let arr2 = ["c", "e", "d"];

// arr1.push(arr2);
// console.log(arr1); // [ 'a', 'b', 'c', [ 'c', 'e', 'd' ] ]

// arr1 = arr1.concat(arr2); // Combines two or more arrays, returns a new array without modifying any existing arrays.
// console.log(arr1); // [ 'a', 'b', 'c', 'c', 'e', 'd' ]

// let arr3 = [...arr1, ...arr2];
// console.log(arr3); // [ 'a', 'b', 'c', 'c', 'e', 'd' ]

const arr4 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// let arr5 = arr4.flat();
// console.log(arr5);  // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]

// let arr5 = arr4.flat(Infinity); // depth
// console.log(arr5); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5];


console.log(Array.isArray("abc")); // false
console.log(Array.isArray(["abc"])); // true
console.log(Array.from({'a': 'b'})); // []
console.log(Array.from("abcd")); // [ 'a', 'b', 'c', 'd' ]
console.log(Array.from(["abcd"])); // [ 'abcd' ]
console.log(Array.of("abc","ced", 12)); // [ 'abc', 'ced', 12 ]

"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

/** Primitive Types (uses Stack Memory) */
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique



console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(Symbol('123') == Symbol('123')); // false


/** Non Primitive, Reference Types (uses Heap Memory) */
// Array, Objects, Functions

const arr1 = ['a','b','c'];
const obj1 = {
    'key1': 'val1'
}
console.log(typeof arr1);  // object
console.log(typeof obj1);  // object


const fun1 = function(){
    console.log("this is fun1");
}
console.log(typeof fun1);  // function (object function)


// Reference Game
let obj2 = obj1;
obj1.key2 = "val2"
console.log(obj2); // { key1: 'val1', key2: 'val2' }

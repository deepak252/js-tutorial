console.log("12"==12); // true
console.log("12">12); // false
console.log(null == 0); // false , null not converted to 0
console.log(null > 0); // false , null converted to 0
console.log(null >= 0); // true , null converted to 0
console.log(null <= 0); // true , null converted to 0
console.log(null < 0); // false , null converted to 0
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

console.log(Number(1)==Number(1)); // true
console.log(new Number(1)== new Number(1)); // false
console.log(String(1)==String(1)); // true
console.log(new String(1)== new String(1)); // false

// Strict chec k , ===
console.log("12"===12); // false , ( type check)

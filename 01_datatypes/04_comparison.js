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


// Strict chec k , ===
console.log("12"===12); // false , ( type check)

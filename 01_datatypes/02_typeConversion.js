/** Number Conversion */
let num1 = 12;
let numStr1 = "s";
let num2 = Number(numStr1)
console.log("\nNUMBER CONVERSION");
console.log(typeof num2); // number
console.log(num2); // NaN
console.log(Number("")); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

/** Boolean Conversion */
console.log("\nBOOLEAN CONVERSION");
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("a")); // true
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false


/** String Conversion */
console.log("\nSTRING CONVERSION");
console.log(String(112)); // 112 (string)
console.log(String("")); //
console.log(String("a")); // a
console.log(String(undefined)); // undefined (string)
console.log(String(null)); // null (string)
console.log(String(true)); // true (string)

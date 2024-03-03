let str1 = "abcdefc";
let str2 = String("pqrstuv");
let str3 = new String("pqrstuv");

// console.log(str1); //abcdefc
// console.log(str2); //pqrstuv
// console.log(str3); //[String: 'pqrstuv']

console.log(str1.charAt(2)); // c
console.log(str1.indexOf('c')); // 2
console.log(str1.substring(1,3)); // bc {1,2}
console.log(str1.slice(1,3)); // bc {1,2}
console.log(str1.slice(-6,5)); // bcde {n-6, 5}

let str4 = "   abcd   ";
console.log(str4.trim());
console.log(str4.trimStart());
console.log(str4.trimEnd());

let url = "https://google.com"
console.log(url.replace('https://','')); // google.com
console.log(url.replaceAll('o','')); // https://ggle.cm
console.log(url.includes('google')); // true

console.log(url.split('//')); // [ 'https:', 'google.com' ]

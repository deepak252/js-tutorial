let num1 = 200;
// console.log(num1); // 100
let num2 = new Number(200);
// console.log(num2); // [Number: 100]

console.log(num1.toString());
console.log(num1.toFixed(3)); // 200.000 (string)
console.log(Number(200.12423).toFixed(3)); // 200.124 (string)
console.log(Number(201.52423).toPrecision(3)); // 202 (string)
console.log(Number(201.22423).toPrecision(4)); // 201.2 (string)

console.log(Number(1000000).toLocaleString()); // 1,000,000
console.log(Number(1000000).toLocaleString('en-IN')); // 10,00,000

console.log(Number.MAX_VALUE)
console.log(Number.isInteger(123.23)) //false
console.log(Number.isInteger(123)) //true

console.log(Math.abs(-3)); // 3
console.log(Math.round(4.534)); // 5
console.log(Math.ceil(4.54)); // 5
console.log(Math.floor(4.54)); // 4
console.log(Math.min(4,3,1,2)); // 1
console.log(Math.max(4,3,1,2)); // 4

console.log(Math.random()); // 0.9911350186899037
console.log(Math.floor(Math.random()*10)+1); // [1...10]
console.log(getRandomNumber(10,20)); // [10...20]
function getRandomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1)) + min;
}


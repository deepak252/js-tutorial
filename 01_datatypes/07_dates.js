let date1 = new Date();
console.log(date1); // 2024-03-03T13:16:23.945Z
console.log(date1.toString()); // Sun Mar 03 2024 18:46:42 GMT+0530 (India Standard Time)
console.log(date1.toDateString()); // Sun Mar 03 2024
console.log(date1.toTimeString()); // 18:48:18 GMT+0530 (India Standard Time)
console.log(date1.toLocaleString()); // 3/3/2024, 6:47:49 PM
console.log(date1.toLocaleDateString()); // 3/3/2024
console.log(date1.toLocaleTimeString()); // 6:49:17 PM
console.log(date1.toISOString()); // 2024-03-03T13:17:49.786Z
console.log(date1.toUTCString()); // Sun, 03 Mar 2024 13:18:54 GMT

console.log(date1.toLocaleString('default',{
    weekday: 'long',
    day: "numeric"
})); // 3 Sunday

console.log(typeof date1); // object

let date2 = new Date(2023, 2, 23); // Month starts from 0
console.log(date2.toLocaleString()); // 3/23/2023, 12:00:00 AM
// let date3 = new Date("2023-01-14"); 
// console.log(date3.toLocaleString()); // 1/14/2023, 5:30:00 AM

// let date4 = Date.now();
// console.log(date4); // 1709472455550

console.log(date2.getMonth()); // 2 

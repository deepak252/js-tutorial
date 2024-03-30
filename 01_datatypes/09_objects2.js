

// Objects 2 
const user = {
    email: "xyz@gmail.com",
    uname: {
      fullname: {
        fname: "Abc",
        lname: "Def",
      },
    },
  };
  
  // console.log(user.uname.fullname.fname); // Abc
  // console.log(user.name?.tname.fname); // undefined
  
  // const obj1 = { 1: "a", 2: "b" };
  // const obj2 = { 3: "c", 4: "d" };
  // const obj3 = { 5: "e", 6: "f" };
  
  // const obj4 = Object.assign(obj1, obj2);
  // console.log(obj1); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
  // console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
  // console.log(obj1 === obj4); // true
  
  // const obj5 = Object.assign({}, obj1, obj2, obj3);
  // console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
  
  // console.log(Object.keys(user)); // [ 'email', 'uname' ]
  // console.log(Object.values(user)); // [ 'xyz@gmail.com', { fullname: { fname: 'Abc', lname: 'Def' } } ]
  // console.log(Object.entries(user)); // [ [ 'email', 'xyz@gmail.com' ], [ 'uname', { fullname: [Object] } ] ]
  
  // //** */ hasOwnProperty: Determines whether an object has a property with the specified name.
  // console.log(user.hasOwnProperty('email')); // true
  // console.log(user.hasOwnProperty('fullname')); // false
  
  
  // Object Destructuring
  let {email} = user;
  console.log(email); // xyz@gmail.com
  let {email: e} = user;
  console.log(e); // xyz@gmail.com
  
  let {uname: {fullname: fn1}} = user;
  console.log(fn1); // { fname: 'Abc', lname: 'Def' }
  
  let {tempname: {fullname: fn2} = {}} = user;  
  console.log(fn2); // undefined
  
  
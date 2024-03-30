

// Objects - 1

// Singleton
// Object.create
// let ob1 = new Object();
// console.log(ob1); // {}

// Object Literals

const symb = Symbol("key1");

const user = {
  name: "Abcd",
  email: "abcd@gmail.com",
  "line 1": "XYZ Block",
  [symb]: "Happy",
};

// console.log(user["line 1"]);
// console.log(user);
// console.log(user[symb]); // Happy

// user.email = "em1@gmail.com";
// console.log(user.email); // em1@gmail.com
// Object.freeze(user);
// user.email = "em2@gmail.com";
// console.log(user.email); // em1@gmail.com

user.greet = function () {
  console.log("Hello ", this.name);
};
user.greet(); // Hello  Abcd


// singleton 
// Object.create
// object literal

const mySym = Symbol("mySym");

const JSUser = {
  name: "Sai Krishna",
  "full name": "Sai Krishna",
  // mySym: "This is a symbol", // this will not work as mySym is a symbol and not a string
  [mySym]: "This is a symbol",
  age: 25,
  location: "Hyderabad",
  email: "sai@gmail.com",
  isLoggedIn: true,
  lastLoginDays: [ "Wednesday", "Thursday"],
}

// console.log(JSUser.isLoggedIn);
// // full name is a special case where we have to use square brackets
// console.log(JSUser["full name"]);
// // console.log(JSUser.mySym); // this will not work as mySym is a symbol
// // here mySym is a symbol and not a string so we have to use square brackets
// console.log(JSUser[mySym]);
// console.log(typeof mySym);

JSUser.age = 26;
// Object.freeze(JSUser);
JSUser.age = 27;

// console.log(JSUser);

JSUser.greetings = function(){
  console.log(`Hello ${this.name}`);
}

JSUser.greetings();
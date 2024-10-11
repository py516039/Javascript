// Primitive
//>> 7 types : String, Number, Boolean, null, Undefined, Symbol, BigInt.

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 5623535462525852n;//bigint me number ke last me n lagana hota hae

//Reference (Non-primitive)
// Array, Objects, Functions
const hero = ["Shaktiman","Ironman", "Loki"];   //arrays

 
  let myObj = {
    name: "Prince",
    age: 22,
}//objects

const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof(bigNumber));

console.log(typeof(outsideTemp));
console.log(typeof myfunction)
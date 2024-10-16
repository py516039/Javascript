const name = "Prince"
const repoCount = 50
// console.log(name + repoCount + " Value");//Older way of writing.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//Modern way of writing string

const gameName = new String('Prince');
console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('3'));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newString1 = "   Prince    "
console.log(newString1);
console.log(newString1.trim()); //Remove starting and ending extra spaces

const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));

console.log(gameName.split('_'));
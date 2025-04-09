var age = 3;
console.log("I'm " + age + " years old!");

// string interpolation.....
console.log(`I'm ${age} years old!`)

// string constructor
const name = new String("Ritesh")
console.log(name)

console.log(name[0])
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf("t"));

const newString = name.substring(0, 4);
console.log(newString);

const anotherString = name.slice(-5, -2);
console.log(anotherString);

const greeting = "   Hello world!   ";
console.log(greeting.trim());
console.log(greeting.trimStart());
console.log(greeting.trimEnd());

const url = "https://ritesh.com/ritesh%20gupta"
console.log(url.replace('%20', '-'))

console.log(url.includes('ritesh'))

str = "hello-this-is-ritesh"
console.log(str.split('-'))
console.log(str.split())
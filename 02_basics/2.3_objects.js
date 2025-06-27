

// *************creating objrct using object litrals************* 

const mySymbol = Symbol("key1")

const jsUser = {
    name : "Ritesh",
    "full name" : "Ritesh Gupta",
    age : 18,
    location : "Jaipur",
    isLoggedin : false,
    lastLoginDays : ["Monday", "Saturday"],
    [mySymbol] : "mykey1"   // using symbol in objects
}

console.log(jsUser.name)  // you can't get full name in this manner 
console.log(jsUser["age"])  // prefered approach

console.log(jsUser["full name"])

console.log(jsUser[mySymbol])

jsUser.age = 21   // changing value
// Object.freeze(jsUser)

// ----function-----

jsUser.greeting = function(){
    console.log("hello js user")
}

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())

// creating new object
const jsUser2 = {
  name: "Ritesh",

  greet1: function() {
    console.log("Hello from greet1");  // prints directly
  },

  greet2: function() {
    return "Hello from greet2";        // returns value
  }
};

jsUser2.greet1();              //  prints: Hello from greet1
console.log(jsUser2.greet2()); //  prints: Hello from greet2


// adding properties outside of the object

const person = {}  // empty object

// adding properties
person.name = "Ritesh"
person.age = "21"
person.eyeColor = "blue"

// displaying data
console.log(person.name)
console.log(person.age)

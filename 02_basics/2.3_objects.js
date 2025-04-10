

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

// adding properties outside of the object

const person = {}  // empty object

// adding properties
person.name = "Ritesh"
person.age = "21"
person.eyeColor = "blue"

// displaying data
console.log(person.name)
console.log(person.age)
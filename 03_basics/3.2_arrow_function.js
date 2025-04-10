const user = {
    username : "ritesh",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
user.welcomeMessage()
user.username = "Ujjwal"
user.welcomeMessage()
 // global object is nothing here so {} comes in output
 // if we run it on browser then window object is show in output because it isglobal object....
console.log(this) 


// we cannot use this keyword in function
function chai(){
    const username = "ritesh"
    console.log(this.username)
}
chai()

// another way to create function
const coffee = function(){
    const username = "ritesh"
    console.log(this.username)
}
coffee()

// *****************arrow function******************

const tea =() => {
    const username = "ritesh"
    console.log(this.username)
}
tea()


// explicit return 
const add = (num1, num2) => {
    return num1+num2
}
console.log(add(2, 4))


// implicit return
const addAnother = (num1, num2) => (num1 + num2)
console.log(addAnother(2, 4))



// returning object in normal function
// 1st way
function printArgument(data) {
    console.log(data);
  }

  const anotherUser = {
    username: "john_doe",
    password: "password123"
  };
  
  printArgument(anotherUser); // {username: "john_doe", password: "password123"}

//   2nd way
function ticket(user){
    console.log("username: ", user.username)
    console.log("password: ", user.password )
}
ticket({
    username: "ritesh",
    password: "123abc"
})


// returning object in arrow function
// implicit return 
const returnObject = () => (
                           {username: "ritesh",
                            password: "123abc"}
                        )
console.log(returnObject())                        
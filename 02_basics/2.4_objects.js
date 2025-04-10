
//  ******************creating object using new keyword*****************

const user = new Object() // non-singleton object
console.log(user)

user.id = "123abc"
user.name ="Sammy"
user.isLoggedin = false

console.log(user)

// accessing keys in array format
console.log(Object.keys(user))

// accessing values in array format
console.log(Object.values(user))

// checking the property exist or not
console.log(user.hasOwnProperty('isLoggedin'))

// *******************nested objects*****************

const regularUser = {
    email : "ritesh@gmail.com",
    name : {
        fullName : {
            firstName : "ritesh",
            lastname : "gupta"
        }
    }
}

// accessing 

console.log(regularUser.name.fullName.firstName);


// *************cancatenation************* 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// console.log(obj3)

// const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj4)

const obj5 = {...obj1, ...obj2}
console.log(obj5)


// *****************array of objects****************

const userArray = [
    
        {id: 1, email: "ritesh@gmail.com"},
        {id: 2, email: "shivam@gmail.com"},
        {id: 3, email: "ashwani@gmail.com"}
]
console.log(userArray[0].email)

// *****************destructureing the object********************

const course = {
    coursename : "js",
    price : "free",
    instructor : "hitesh"
  }
  
  // helps in printing mutiple times
  const {instructor : inst} = course
  console.log(inst)
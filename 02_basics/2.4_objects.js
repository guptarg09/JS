
//  ******************creating object using new keyword*****************

// const user = new Object() // non-singleton object
// console.log(user)

// user.id = "123abc"
// user.name ="Sammy"
// user.isLoggedin = false

// console.log(user)

// *******************nested objects*****************

// const regularUser = {
//     email : "ritesh@gmail.com",
//     name : {
//         fullName : {
//             firstName : "ritesh",
//             lastname : "gupta"
//         }
//     }
// }

// // accessing 

// console.log(regularUser.name.fullName.firstName);

// cancatenation 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// console.log(obj3)

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4)
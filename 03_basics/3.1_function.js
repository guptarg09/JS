// function userLoginMessage(username){

//     if(!username){
//         console.log("please enter username")
//         return 
//     }
//     return `${username} just logged in`
// }
// console.log(userLoginMessage("ritesh"))
// console.log(userLoginMessage())



// ... is claaed as rest operator
function claculateCartPrice(val1, val2, ...num){
    return num
}
console.log(claculateCartPrice(100, 200, 300, 500))



// function with object
const product = { 
    productname: "shoes",
    price: 1999
}

function handleObject(anyObject){ 
    console.log(`product name is ${product.productname} and price is ${product.price}`)
}
handleObject(product)        
handleObject({               // you can also create object directly here....
    productname: "shoes",
    price: 1999
})



// function with array
const myArray = [100, 200, 300, 400]

function getArrayElement(anyArray){
    return anyArray[1]
}
console.log(getArrayElement(myArray))
console.log(getArrayElement([100, 200, 300, 400]))  // you can also declare array directly here....
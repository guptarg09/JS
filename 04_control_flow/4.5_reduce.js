const myNums = [1, 2, 3]

// using normal function
const mytotal = myNums.reduce(function(acc, currval) {
        console.log(`acc: ${acc} and currval: ${currval}`)  // show procedure
        return acc + currval
},0 )
console.log(mytotal)

// using arrow function
const total = myNums.reduce( (acc, currval) => acc+currval, 3 )
console.log(total)


const shoppingCart = [
    {
        itemName: "shoes",
        price: 1999
    },
    {
        itemName: "shirt",
        price: 999
    },
    {
        itemName: "jeans",
        price: 2999
    },
    {
        itemName: "watch",
        price: 1599
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc+item.price, 0)
console.log(priceToPay)
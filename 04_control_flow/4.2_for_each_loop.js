
const coding = ['java', 'c++', 'pyhton', 'ruby']

// // using normal function
// coding.forEach( function (key) {
//     console.log(key)
// } )
// console.log("------------------")

// // using arrow function
// coding.forEach( (key) => {
//     console.log(key)
// } )
// console.log("------------------")

// function printme(item){
//     console.log(item)
// }
// coding.forEach(printme)
// console.log("------------------")

// coding.forEach( (key, index, arr) => {
//         console.log(key, index, arr)
// } )
// console.log("------------------")


// array of objects
const mycoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "java",
        languageFile: "java"
    },
    {
        languageName: "python",
        languageFile: "py"
    }
]
mycoding.forEach( (item) => {
    console.log(item)
} )
console.log("------------------")

mycoding.forEach( (item) => {
    console.log(item.languageName)
} )
console.log("------------------")

mycoding.forEach( (item) => {
    console.log(item.languageFile)
} )

// // *****************for-of loop*****************


// const arr = [1, 3, 4, 5]
// for(const num of arr) {
//     console.log(num)
// }

// const greeting = "good morning!"
// for(const greet of greeting) {
//     console.log(greet)
// }


// ****************msps*****************


const map = new Map()
map.set('IN', "India")               //    does not teke duplicate value...
map.set('USA',"United States Of America")
map.set('Fr', "France")
                                
console.log(map)
console.log("------------------")
// for of loop on map...
for(const key of map){
    console.log(key)
}
console.log("------------------")
for(const [key, value] of map) {
    console.log(key, '->', value)
}
console.log("------------------")


// ******************for of loop on object************************


// we can't iterate object using for of loop, we use for in loop here...
const myobj = {
    js: 'javascript',
    cpp: 'c++',
    py: 'python'
}

for(const key in myobj){
    console.log(key)
}
console.log("-----------------")
for(const key in myobj){
    console.log(myobj[key])
}
console.log("-----------------")
for(const key in myobj){
    console.log(`${key} is shortcut for ${myobj[key]}`)
}
console.log("------------------")


// *************************for in loop on array**************************

const programming = ['java', 'c++', 'pyhton', 'ruby']
for(const key in programming){
    console.log(key)
}
console.log("-------------------")
for(const key in programming){
    console.log(programming[key])
}
let myDate = new Date()
console.log(myDate.toISOString())
console.log(myDate.toString())
console.log(myDate.toLocaleString())

console.log(typeof myDate)

let CreateDate = new Date(2023, 0, 3)
console.log(CreateDate.toDateString())

let myCreateDate = new Date("2023-01-12")
console.log(myCreateDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreateDate.getTime())
console.log(Math.floor(myTimeStamp/1000))    // converted into seconds
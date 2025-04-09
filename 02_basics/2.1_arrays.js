const arr = [2, 4, 3, 'hello', true]
console.log(arr)

const newArray = new Array(3, 4, 6, 3);
console.log(newArray);  

newArray.push('js')
console.log(newArray); 

newArray.pop()
console.log(newArray); 

newArray.unshift(33);
console.log(newArray);  // Output: [33, 3, 4, 6, 3]

newArray.shift(33);
console.log(newArray);

console.log(newArray.includes(4))
console.log(newArray.indexOf(32))


console.log(newArray.join())

anotherArray = [9, 7, 5, 3, 1]
console.log("A - ", anotherArray)

console.log(anotherArray.slice(1, 3))
console.log("B - ", anotherArray)

console.log(anotherArray.splice(1, 3))
console.log("C - ", anotherArray)
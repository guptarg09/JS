let arr1 = [2, 3, 5, 6];
let arr2 = [45, 34, 23, 45];

// This adds `arr2` as a single element at the end of `arr1`
// let newArr = arr1.push(arr2);

// console.log(newArr);  // This will output the new length of `arr1`, not the array.
// console.log(arr1);    // This will show arr1 after the push operation.

let mergedArr = arr1.concat(arr2);
console.log(mergedArr);

const all_elements = [...arr1, ...arr2];
console.log(all_elements);

console.log(Array.isArray("Ritesh")); //false  
console.log(Array.from("Ritesh"));   //[ 'R', 'i', 't', 'e', 's', 'h' ]

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))  //[ 100, 200, 300 ]

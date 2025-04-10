// IIFE - Immediately Invoked Function Expression

// named iife because it has a name bd
(function db() {
    console.log("database connected!")
})();   // semicolon is required here...



// arrow function with iife
// unnamed iife
( () => {
    console.log("database connected successfully!")
} ) ();


( (name) => {
    console.log(`hello, ${name}`)
} ) ('ritesh');


// note - if you want to execute two or more iifes then you have to use semicolon(;) at last...

// function mulBy5(num){
//     return num*5;
// }
// mulBy5.power = 2;  //You’re assigning a property named power to the function object mulBy5, 
// // and you're setting its value to 2

// console.log(mulBy5(5));
// console.log(mulBy5.power);
// console.log(mulBy5.prototype);


function createUser(product, prise){
    this.product = product;
    this.prise = prise;
}
createUser.prototype.increment = function(){
    this.prise++;   
}
createUser.prototype.printMe = function(){
    console.log(`prise is ${this.prise}`);
}

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.increment();
chai.printMe();

tea.increment();
tea.printMe();
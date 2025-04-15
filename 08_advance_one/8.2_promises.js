

const promiseOne = new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Ansc task is completed!');
            resolve();
        }, 1000)
    })
    promiseOne.then(function(){
        console.log("Promise consumed")
    })
    
    // without storing into a variable...
    
    new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Ansc task 2");
            resolve();
        }, 1000)
    }).then(function(){
        console.log("Ansc task 2 resolved")
    })
    
    // forwording data from resolve() to then()
    
    const promiseThree = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve({username: "chai", email: "chai@example.com"})
        }, 1000)
    })
    promiseThree.then(function(user){
        console.log(user);
    })
    
    // if operation is not done 
    
    const promiseFour = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = false;
            if(!error){
                resolve({username: "ritesh", password: "abc"})
            }
            else{
                reject("ERROR: Something went wrong")
            }
        }, 1000)
    })
    promiseFour.then((user) => {
        console.log(user)
        return user.username
    }).then((myusername) => {
        console.log(myusername);
    }).catch(function(errStmt){
        console.log(errStmt);
    }).finally(() => {
        console.log("The promise is either resolve or rejected")
    })
    

    
    //by using async method
    
    const promiseFive = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = true;
            if(!error){
                resolve({username: "javascript", password: "abc"});
            }
            else{
                reject("ERROR: JS went wrong")
            }
        }, 1000)
    })
    async function consumerPromiseFive(){
        try{
            const responce = await promiseFive;
            console.log(responce);
        } catch(errStmt){
            console.log(errStmt)
        }
    }
    consumerPromiseFive()



    // taking responce from 'https://jsonplaceholder.typicode.com/users' 

    // --------1st way---------

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error));


    // ------2nd way------

    // async function getAllUsers() {
    //     try{
    //         const responce = await fetch('https://jsonplaceholder.typicode.com/users');
    //         const data = await responce.json();
    //         console.log(data)
    //     } catch(error){
    //         console.log(error)
    //     }
    // }
    // getAllUsers();
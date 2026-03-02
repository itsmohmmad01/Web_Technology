//a promises is an object that represents future result of an asynchronous operation
//promises as three step process
//1. pending: initial state, neither fulfilled nor rejected
//2. fulfilled: operation completed successfully
//3. rejected: operation failed
//4.resolve: a function that is called when the operation is successful, it takes a value as an argument

let MyPromise = new Promise((resolve, reject) => {
    let success = true; //simulating an asynchronous operation
    if (success) {
        resolve("Operation successful!");
    }else {
        reject("Operation failed!");
    }
});

MyPromise.then(result => {
    console.log(result); //logs "Operation successful!"
}).catch(error => {
    console.error(error); //logs "Operation failed!" if success is false
});
//resolve are sucess , and reject are failure and then means when the promise is fulfilled and catch means when the promise is rejectedss

//where we use promises in company level
//why promises better then call back 
//write a code for three example of promises
//four eaxple of promises with asyn and await


//fetch is the inbuilt js method used to make http reuests
//Fetch Syntax
 fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => 
    {        // console.log(response);
        return response.json();
    })
    .catch((error) => {
        console.log(error);
    })
    .then((data) => {
        console.log(data);
    } )

    //what is fetch and whre we use fetch in company level
    //write four example of fetch method 
    //write a code for fetch method with async and await
    //fetch post show only first five records
    //create fake promise and resolve it after 3 seconds and log the result in console and reject it after 5 seconds and log the error in console
    
    //Interview question
    //What is promises
    //what is promises state
    //diff between promises and call back
    //what does fetch return 
    //why do we use response.json
    //diff bet then // catch and asyn // await
    //what is promises chaining
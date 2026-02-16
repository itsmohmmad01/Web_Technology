//synchronous in javascript
//code excecute line by line . each task wait fro the previsous task to finish
//blocking in nature
//javascipt by default single traded and synchronus

//Example
console.log("start");
function add(a,b){
    return a+b;
}
let result = add(2,3);
console.log(result);
console.log("end");


//asynchronous in javascript
//Non blocking in behavior
//javascipt doesnot wait it move to next line of code and execute it. some task take time like api call ,file read and database query. so it will not wait for these task to complete and move to next line of code
//Used when fetching data from server , reading file and set timeout and api call

//Example
console.log("start");
setTimeout(() => {
    console.log("this is asynchronous code");
},2000);
console.log("end");
//settimeout is a asynchronous function it will wait for 2 second and then execute the code inside it but it will not block the execution of next line of code so it will print end first and then after 2 second it will print this is asynchronous code

//project related to synchronous and asynchronous code
//synchronous code
function fetchData(){
    let data = "data from server";
    return data;
}   
console.log("fetching data...");
let result1 = fetchData();
console.log(result1);
console.log("data fetched");
//asynchronous code
function fetchDataAsync(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let data = "data from server";
            resolve(data);
        },2000);
    });
}   

//can you list out some project ideas related to synchronous and asynchronous code in javascript
//1. Weather App: Fetch weather data from an API and display it on the webpage. Use asynchronous code to handle the API call and update the UI accordingly.
//2. To-Do List: Create a to-do list application where users can add, edit, and delete tasks. Use synchronous code for handling user input and asynchronous code for saving tasks to local storage or a database.
//3. Chat Application: Build a real-time chat application using WebSockets. Use asynchronous code to handle incoming messages and update the chat interface in real-time.
//4. Image Gallery: Create an image gallery that fetches images from an API and displays them on the webpage. Use asynchronous code to handle the API call and update the UI with the fetched images.
//5. File Upload: Implement a file upload feature where users can select a file and upload it to a server. Use asynchronous code to handle the file upload process and provide feedback to the user.
//6. News Aggregator: Build a news aggregator that fetches news articles from multiple sources and displays them on the webpage. Use asynchronous code to handle the API calls and update the UI with the fetched news articles.

//1. Weather App
function fetchWeather(city){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let weatherData = `Weather data for ${city}`;
            resolve(weatherData);
        },2000);
    });
}
console.log("fetching weather data...");
fetchWeather("New York").then((data) => {
    console.log(data);
    console.log("weather data fetched");
}
).catch((error) => {
    console.log("error fetching weather data",error);
}); 


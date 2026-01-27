//we can declare two types of objects in javascript object literal and object singleton
//1. object literal

let user={ name:"Mohmmad" ,age:21,email:"Nuh@gmail.com",city :"Sangli",islogin:true,lastLogin:['Monday','Tuesday'],"Full Name":"Mohmmad Nuh" };
console.log(user);
console.log(user.email); //accessing object property using dot notation
console.log(user.lastLogin); //accessing object property using bracket notation
console.log();
console.log(user["Full Name"]); //accessing object property with space in key using bracket notation
console.log();
console.log(user.email="mohmmad@gmail.com"); //updating object property

// Object.freeze(user); //freezing the object to prevent further modifications
user.email="Mujawar@gmail.com";
console.log(user.email); //email will remain unchanged due to Object.freeze

//Symbol example
const mysql =Symbol("Js");
console.log(mysql); //Symbol(JS)

const myobj={
      mysum:"db",
};
console.log(typeof myobj.mysum); //string
console.log(myobj["mysum"])

user.greeting=function(){
        console.log("hello.js");
}
user.greeting();

user.greeting2=function(){
    console.log(`Hello ${this.name}  welcome to ${this.city}`);
}
user.greeting2();







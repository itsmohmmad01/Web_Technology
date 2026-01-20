//These is good way  but we can use interpolation also
const str1 = "Hello";
console.log(str1);

//String Interpolation
const str2 = "World!";
console.log(`Hello, ${str2}`);

//new way to declare string
//here 'new' is used to create an object
const str3 = new String("Mohmmad");
console.log(str3);
console.log(str3.length); //length of string
console.log(str3[4]); //accessing character at index 4
console.log(str3.toUpperCase()); //converting to uppercase
console.log(str3.toLowerCase()); //converting to lowercase
console.log(str3.charAt(2)); //character at index 2
console.log(str3.indexOf('m')); //index of character 'm'

const str4 = "    Nuh    ";
console.log(str4.trim()); //removing whitespace from both ends

//all string method , like includes(), slice(), substring(), replace() 
console.log(str4.includes("Nuh")); //checking if "Nuh" is in str4
console.log(str4.slice(2,5));   
console.log(str4.substring(2,5));
console.log(str4.replace("Nuh", "Mohmmad"));
console.log()
//String are immutable in javascript
let str5 = "Hello";
str5[0] = "h"; //this will not change the string
console.log(str5); //still "Hello"
console.log()



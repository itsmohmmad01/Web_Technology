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

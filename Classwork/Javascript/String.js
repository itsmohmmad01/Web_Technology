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
// all string methods examples
console.log("JavaScript".includes("Script")); //true
console.log("JavaScript".startsWith("Java"));
console.log("JavaScript".endsWith("Script"));
console.log("JavaScript".repeat(3));
console.log("   Trim me   ".trim());
console.log("Slice Example".slice(0,5));
console.log("Substring Example".substring(0,9));
console.log("Replace Example".replace("Example", "Demo"));
console.log("Split Example".split(" "));
console.log("toUpperCase Example".toUpperCase());
console.log("toLowerCase Example".toLowerCase());
console.log("Char at index 2".charAt(2));
console.log("Index of 'e'".indexOf('e'));
console.log("Last index of 'e'".lastIndexOf('e'));
console.log("Concatenation ".concat("Example"));
console.log("Length Example".length);
console.log("Char code at index 2".charCodeAt(2));  
console.log("From char code 65,66,67".fromCharCode(65,66,67));
console.log()


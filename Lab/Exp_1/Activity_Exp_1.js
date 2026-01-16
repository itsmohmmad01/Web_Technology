//Activity 1 : Display student details
let Name = "Nuh";
let Age = 20;
let Email = "Nuh@gmail.com";
// console.log("Student Name: " + Name);
// console.log("Student Age: " + Age);
// console.log("Student Email: " + Email); 
// console.log();
document.write("Student Name: " + Name)
document.write("<br> Student Age: " + Age)
document.write("<br> Student Email: " + Email)
document.write("<br>")

//Activity 2 : Check even or odd number
let number = 48;
if (number % 2 === 0) {
    // console.log(number + " is even");
    document.write("<br>"+number + " is even")
} else {
    // console.log(number + " is odd");
    document.write("<br>"+number + " is odd")
}  
// console.log();
document.write("<br>")

//Activity 3 : Print numbers
for (let i = 1; i <= 5; i++) {
    // console.log(i);
    document.write("<br>"+i)
}
// console.log();
document.write("<br>")

//Activity 4 : Check pass or fail
let marks = 65;
if (marks >= 20) {
    // console.log("Student has passed");
    document.write("<br> Student has passed")
} else {
    // console.log("Student has failed");
    document.write("<br> Student has failed")
}       

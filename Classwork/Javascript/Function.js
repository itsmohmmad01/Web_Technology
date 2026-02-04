
function add(a,b){
    let result=a+b;
    return result;
}
console.log("Sum: "+ add(5,7));

// function sub(a,b){
//     return a-b;
//     let result=a-b;
//     return result;
// }

function sub(a,b){
    let result=a-b;
    return result;
}   
console.log("Difference: "+ sub(1,2));


function Userlogin(name){
    return `Welcome${name}`;
}
console.log(Userlogin(" Mohmmad"));
// console.log(Userlogin()); // when string is not passed it returns undefined


function a(num1){
    return num1;
}
console.log(a(5,3,4,6)); // it returns only first argument and ignores rest

// Arrow Function
function my(){
    const greet=()=> "Hello World";
    return greet();
}
console.log(my());

//these keyword story
function person(){
     Username="Mohmmad";
    this.Username="Nuh";
    console.log(Username); 
}
person();

const arrow= () =>{
     username="nuh";
    console.log(this)
}
arrow();

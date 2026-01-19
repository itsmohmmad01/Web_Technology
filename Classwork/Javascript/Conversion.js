let score = "22";
let sccoreforbool = true;
let scorefornull = null;
let scoreforundef = undefined;

console.log(typeof (score));            // "string"
console.log(typeof (sccoreforbool));    // "boolean"
console.log(typeof (scorefornull));    // "object"
console.log(typeof (scoreforundef));   // "undefined"
console.log(); 

let a = "abc"
let aconvert = Number(a);
console.log(typeof (aconvert)); 
console.log(aconvert);// if string has only numbers then it will convert to number otherwise it will return NaN

let b = "aa"
let bconvert = String(b);
console.log(typeof (bconvert));

let c = true
let cconvert = Number(c);
console.log(typeof (cconvert));
console.log(cconvert); // true = 1 , false = 0
console.log();

let d = null
let dconvert = Number(d);
console.log(typeof (dconvert));
console.log(dconvert);

let e = undefined
let econvert = Number(e);   
console.log(typeof (econvert));
console.log(econvert);  // undefined will return NaN when converted to number
console.log();


//Activit 1 : Null,Boolean,Undefined to Number , Arithmetic Operations ,
              

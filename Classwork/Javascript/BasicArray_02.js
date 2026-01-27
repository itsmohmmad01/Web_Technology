let Superheroes = ["Spiderman", "Ironman", "Hulk", "Thor", "Captain America"];
console.log(Superheroes);

let Villains = ["Loki", "Thanos", "Green Goblin", "Doctor Octopus"];
console.log(Villains);

Superheroes.push(Villains); // adds element at the end
console.log(Superheroes);

console.log(Superheroes[3]); 

console.log(Superheroes[2][2]);

Superheroes.concat(Villains); // merges two arrays
console.log(Superheroes);

const a =[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const b = a.flat(Infinity); //we used flat method to flatten the array //nested array to single array. 
console.log(b);

const c = a.flat(1); //flattens the array upto 2 levels
console.log(c);

//Used For Datascripting
console.log(Array.isArray("Mohmmad")); // checks if the variable is an array or not
console.log(Array.from("Mohmmad")); // converts string to array
console.log(Array.from({name: "Mohmmad"})); //give empty array because object is not iterable not convert in key value pair is from

let Score1 =100
let Score2 =200
let Score3 =300
console.log(Array.of(Score1, Score2, Score3)); // creates an array from the given elements



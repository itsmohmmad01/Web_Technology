let a = [0, 1, 2, 3, 4,"h"];
console.log(a);

const b = [0, 1, 2, 3, 4];
console.log(b);

let c = new Array(5,6,7,8);
c.push(9);// it adds 9 at the end of the array
console.log(c[2]);

console.log(c);
console.log(c.pop());// it removes the last element of the array and returns it

c.unshift(1);// it shifts the array to right and add 1 at index 0
console.log(c);

c.shift(); // it removes the first element of the array and shifts the array to left
console.log(c);

console.log(c.includes(5)); // it checks whether the array includes the given element or not and returns boolean value

console.log(c.indexOf(7)); // it returns the index of the given element in the array

console.log(typeof c); // it returns the type of the variable

const d = c.join();
console.log(d); // it joins all the elements of the array into a string and returns it
console.log(typeof d); // it returns the type of the variable
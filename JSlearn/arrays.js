/*
Array methods are functions built-in to JavaScript that we can apply to our arrays — Each method has a
 unique function that performs a change or calculation to our array and saves us from writing common functions from scratch
*/

//array methods
// add/remove items

/*
arr.push(...items) – adds items to the end,
arr.pop() – extracts an item from the end,
arr.shift() – extracts an item from the beginning,
arr.unshift(...items) – adds items to the beginning.
*/

//splice
/*let arr =["I", "go", "home"];
delete arr[1]; //removes "go" from the array.
alert(arr[1]); //returns undefined

// the array is now["I",  ,"home"]
alert(arr.length); //returns 3 */

// delete obj key removes the value by the key, it's fine for objects but not arrays
// arr.splice can insert, remove and replace elements
/*It modifies arr starting from the index start: 
removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.*/

let sib = ["Grace", "Sharon", "Goodluck", "Goodnews"];
sib.splice(0, 2, "ene", "oma"); //removes grace and sharon and replaces it with ene and weirdo
console.log(sib) 

let removed= sib.splice(0,2);
console.log(removed) // returns ene and oma

console.log(5[2[3]])









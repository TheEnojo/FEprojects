// array methods
// fill      Fill all the elements with a value
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits)

fruits.fill("Kiwi", 2, 4);
console.log(fruits)*/

/*The fill() method fills specified elements in an array with a value.
The fill() method overwrites the original array.
Start and end position can be specified. If not, all elements will be filled. */

// map  
/*
map() creates a new array from calling a function for every array element.
map() calls a function once for each element in an array.
map() does not execute the function for empty elements.
map() does not change the original array.
*/
//Return a new array with the square root of all element values:
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
console.log(newArr)


//Multiply all the values in an array with 10:

const numbers2 = [65, 44, 12, 4];
const newArr2 = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

//reduce
/*
The reduce() method executes a reducer function for array element.
The reduce() method returns a single value: the function's accumulated result.
The reduce() method does not execute the function for empty array elements.
The reduce() method does not change the original array.
*/

//Subtract all numbers in an array:

const numbers3= [175, 50, 25];

function myFunc(total, num) {
  return total - num;
}

//reduceright
/*
The reduceRight() method executes a reducer function for each array element.
The reduceRight() method works from right to left.
The reduceRight() method returns a single value: the function's accumulated result.
The reduceRight() method does not execute the function for empty elements.*/


//Subtract the numbers in the array, starting from the end:

const numbers4 = [175, 50, 25];

function myFunc(total, num) {
  return total - num;
}

//find
/*
The find() method returns the value of the first element that passes a test.
The find() method executes a function for each array element.
The find() method returns undefined if no elements are found.
The find() method does not execute the function for empty elements.
The find() method does not change the original array.
*/

//Find the value of the first element with a value over 18:

const ages = [3, 10, 18, 20];
function checkAge(age) 
{ return age > 18;}
function myFunction() {
   }

//findindex
/*
The findIndex() method executes a function for each array element.
The findIndex() method returns the index (position) of the first element that passes a test.
The findIndex() method returns -1 if no match is found.
The findIndex() method does not execute the function for empty array elements.
The findIndex() method does not change the original array.
*/

//Find the first  element with a value over 18:

const ages2 = [3, 10, 18, 20];
ages.findIndex(checkAge);
function checkAge(age) {
  return age > 18;
}
















































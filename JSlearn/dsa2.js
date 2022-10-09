/* array of two numbers, return the sum of two numbers and the sum of the numbers betwwen them */


function sumAll(arr){
    let min, max;
    if(arr[0] > arr[1]){
      max= arr[0];
        min= arr[1];
    }
else{
   max= arr[1];
   min= arr[0];
}
let sum=0
for(let i=min; i <= max; i++){
sum += i;
}
return sum;
}

console.log(sumAll([4,1]))

/*compare two arrays and return a new array with any items found in one of the two given arrays but not both, in other words
return the symmetric difference of the two arrays*/

/*function diffArray(arr1, arr2){
  const union[];
  for(let i=0; i<arr1.length; i++)
  if (union.includes(arr[i]))
}

diffArray([1,2,3,5], [1,2,3,4,5]);*/

//number methods and properties
// toString() method

/*let x= 123;
x.toString();
  console.log((123) .toString());
 console.log((100+23) .toString());

// toExponential() method
//  returns a string, with a number rounded and written using exponential notation. A parameter defines the number of characters behind the decimal point
let y = 9.656;
y.toExponential(2);
y.toExponential(4);
y.toExponential(6);

//toFixed() method
//returns a string, with the number written with a specified number of decimals:
let z= 9.656;
z.toFixed(0);
z.toFixed(2);
z.toFixed(4);
z.toFixed(6);

//toPrecision() method
// returns a string with  a number written with a specified length
let a= 9.656;
a.toFixed();
a.toFixed(2);
a.toFixed(4);
a.toFixed(6);

//toValue() method
// returns a number as a number

let d = 123;
d.valueOf();
(123).valueOf();
(100 + 23).valueOf(); */

//converting variables to number
// GLOBAL JAVASCRIPT METHODS
//    The Number() method    Returns a number, converted from its argument.
//    The parseInt() method     Parses its argument and returns a floating point number
//    The parseFloat() method  Parses its argument and returns an integer

// number method
/*console.log(Number(true))
console.log(Number("john"))
console.log(Number("10"))
console.log(Number("  10"))
console.log(Number("10,33"))
console.log(Number("10.33"))

console.log(Number(new Date("1970-01-01"))) */

// parseInt method   parses a string and returns a whole number, spaces are allowed. Only the first number is returned.
/*console.log(parseInt("-10"))
console.log(parseInt("-10.33"))
console.log(parseInt("10"))
console.log(parseInt("10.33"))
console.log(parseInt("10 20 30"))
console.log(parseInt("10 years"))
console.log(parseInt("years 10"))*/


//parseFloat method  parses a string and returns a number. Spaces are allowed. Only the first number is returned
console.log(parseFloat("10"))
console.log(parseFloat("10.33"))
console.log(parseFloat("10 20 30"))
console.log(parseFloat("10 years"))
console.log(parseFloat("years 10"))

// number properties
/*
MAX_VALUE	           Returns the largest number possible in JavaScript
MIN_VALUE	            Returns the smallest number possible in JavaScript
POSITIVE_INFINITY	 Represents infinity (returned on overflow)
NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
NaN	                           Represents a "Not-a-Number" value
*/



let x=Number.MAX_VALUE





































































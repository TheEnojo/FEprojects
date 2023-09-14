//while loop

//while the condition is truthy, the code from the loop is executed


let a = 0;
while (a < 5) {
    console.log('amazing')
    a++;
}

//A single execution of the loop body is called an iteration. The loop in the example above makes three iterations.

//we can omit curly braces for single lines
let b = 0
while (b) alert(b--);

//do...while loop
//The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
let c = 0
do {
    console.log('hello');
    c++
} while (c < 5)

//for loop

for (let d = 0; d < 5; d++) { //inline variable declaration
    console.log(d);
}


//for loop example explained
/*	
begin	      let i = 0	     Executes once upon entering the loop.
condition	i < 3	        Checked before every loop iteration. If false, the loop stops.
body	      alert(i)	      Runs again and again while the condition is truthy.
step	       i++	           Executes after the body on each iteration.
*/

//breaking the loop
// we can force exit the loop amytime using the special break directive

let sum = 0;
while (true) {
    let value = prompt('Enter a number', "");
    if (!value) break;

    sum += value;
}
alert("Sum: " + sum);

//continue to the next iteration
//it doesn't stop the whole loop rather it stops the current iteration and forces the loop to start a new one if the condition allows























































/*//a function is a piece of reusable code. They allowed the code  to be called many times without repitition
// there are built in functions like alerts, prompts and confirm.

//function declaration
//to create a function, we use a declaration

function showMessage(){
    alert("Hello, world");
}

//a function can be called by it's name
showMessage();
showMessage();
//the message will be shown twice
//The call showMessage() executes the code of the function. Here we will see the message two times.

//Local variable
//A variable declared inside a function is only visible inside that function.

function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable
  
    alert( message );
  }
  
  showMessage(); // Hello, I'm JavaScript!
  
  alert( message ); // <-- Error! The variable is local to the function

  //outer variables
  //a function can access outer variables and modify them too

  let userName = 'John';

  function showMessage() {
    let userName = "Bob"; // (1) changed the outer variable
  
    let message = 'Hello, ' + userName;
    alert(message);
  }
  
  alert( userName ); // John before the function call
  
  showMessage();
  
  alert( userName ); // Bob, the value was modified by the function
//a method is a function that does something
//function declaration
function greet() {
  console.log('hello world');
}

greet();
greet();
greet();

//function expression ---- storing functions in variables
// anytime you get a variable and set it equal to something whether its a function, string or number or something else that is known as an expression.
// we should always have semi-colons at the end of function expressions

//you can store functions in a constant if you don't want to override the function later on
const speak = function (name) {
  console.log(`good day ${name}`)
};

speak('Grace');
//you can give your parameters a default value to stop it from reading undefined






function iseven(n) {
  let d = n;
  switch (d % 2) {
    case 0:
      console.log(true)
      break;
    default:
      console.log(false)
      break;
  }

}

iseven(9);


function number(n) {

  for (let d = n; d > -1; d--
  ) {
    console.log(d);
  }


}
number(2) 
;*/



function number(c) {
  for (let d = 1; d < 30/2;  d++) {
    console.log(d * c);
  }

}

number(3);

let num= 5;
let s=2;
let i=3;






































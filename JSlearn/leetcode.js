/*
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
For example, 121 is a palindrome while 123 is not.
*/


function isPalindrome(x) {
    let numbers=[]; //empty stack
    let rnumbers="";
   
for(var i = 0; i< isPalindrome.length; i++ ){
   numbers.push(numbers[i]) //put the numbers into the stack
}

   for(let i =0; i<isPalindrome.length; i++ ){
   rnumbers += numbers.pop(); //pop off the stack in reverse order
}
if (rnumbers=== isPalindrome){
    console.log(false)

    
}
   else{
       console.log(true)
   }
};

isPalindrome(321)
// stack: last in first out
/*functions in a stack
push: for placing data onto a stack
pop: for removing the top element of a stack

peek: for displaying the top element of a stack
length or size: for determining how many elements are on a stack

You can use an array as a stack in javascript



*/
var letters = []; //this is our stack

var word = "racecar";
var rword = "";

//put letters of word into stacks


for (var i = 0; i < word.length; i++) {
    letters.push(word[i])
}

//pop off the stack in reverse order 
for (let i = 0; i < word.length; i++) {
    rword += letters.pop();
}

if (rword == word) {
    console.log(word + ' is a palindrome.')
}

else {
    console.log(word + ' is not a palindrome')
}




function fibonacci(n) {
    //base case
    if (n === 2 || n === 1) {
        return 1;
    } else if (n <= 0) {
        return 0;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);

}
fibonacci(10)


function  sumUp(n) {
    let result =0;
    for (let i=1; i<=n; i++){
        result=result + i;
    }
    return result;
}

sumUp(5);

/*
Stacks and queues
stacks store items in a last in first out order (LIFO)
Queues store items in a first in first out order(FIFO)
     Enqueue, Dequeue and lear queue




*/
















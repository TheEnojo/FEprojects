 //DOM

var element = document.createElement('p');

var element = document.createElement('img');

var element = document.createElement('a');



function addChild() {
    const parent = document.getElementById("parent"); // selecting parent
    const child = document.createElement("p"); // creating child
    child.innerHTML = "Nice to meet you"; // adding some content

    // appending child to parent
    parent.append(child);
    // you can also use appendChild()

    //parent.removeChild(child)

    //parent.replaceChild(child)
}

function sayHi() {
    alert("Hello");
}

window.sayHi()
alert(window.innerHeight);
document.body.style.background ="pink"
setTimeout(() => document.body.style.background = "", 4000);
  

alert(location.href);
if (confirm ("Go to wikipedia?")){
location.href= "https://wikipedia.org";
}





































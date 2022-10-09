let color=["cornflowerblue", "yellowgreen", "crimson", "pink" ,"palegreen", "violet", "coral", "chocolate"];
let btn= document.querySelector("#btn");
let reveal = document.querySelector("#reveal");

btn.addEventListener  ("click", function() {
    let randomColour =color[Math.floor(Math.random () * color.length)]
document.body.style.background= randomColour
word.innerText=  randomColour
}


)

reveal.addEventListener("click", function(){
document.body.style.background=document.getElementById("input").value;

}






)

















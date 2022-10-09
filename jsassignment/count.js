let add = document.querySelector("#add");
let subract = document.querySelector("#subtract");
let reset = document.querySelector("#resett");
let count = 0;
let printt= document.querySelector("#printt");

add.addEventListener("click", function () {
    count++;
    output.innerText = count;


    if (count > 0) {
        output.style.color = "yellowgreen"
    }
    else if (count < 0) {
        output.style.color = "red"
    }
    else output.style.color = "white"

}
);


subtract.addEventListener("click", function () {
    count--;

    output.innerText = count;


    if (count > 0) {
        output.style.color = "yellowgreen"
    }
    else if (count < 0) {
        output.style.color = "red"
    }
    else output.style.color = "white"




});


reset.addEventListener("click", function () {

    count = 0;
    output.innerText = count;
    output.style.color = "white"

}

)

printt.addEventListener("click",  function(){
    word.innerText = count
    word.style.color="black"
}



)























let sbtn = document.querySelector("#sbtn");
let rbtn = document.querySelector("#rbtn");
let stbtn = document.querySelector("#stbtn");

function count() {
    var time = new Date();
    var h = time.getHours()
    var m = time.getMinutes()
    var s = time.getSeconds()

    setInterval(count, 1000)


}
// start
sbtn.addEventListener("click", count () {
    countdown.innerText = document.getElementById("input").value * 60;
}
)

// reset
rbtn.addEventListener("click", function () {
    countdown.innerText = " "
    input.value = ""
}
)




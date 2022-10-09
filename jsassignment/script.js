let add = document.querySelector("#add");
let subract = document.querySelector("#subtract");

add.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = Number(output.innerText) + 1;

    if (result > 70) {
        result = 0;

    }

    output.innerText = result;
});

subract.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = Number(output.innerText) - 1;

    if (result < 0) {
        result = Number(output.innerText) - 1;

    }

    output.innerText = result;
}
);

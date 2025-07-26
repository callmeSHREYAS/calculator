let inputTxt = document.getElementById("cal-display")
const calBtn = document.querySelectorAll('.cal-btn')
const calBtnexp = document.querySelectorAll('.cal-btnexp')

const calEq = document.querySelector('.cal-eq')
const btnClear = document.querySelector('.btn-clear')
btnClear.addEventListener("click", function () {
    exp = ""
    inputTxt.value = ""
})
let exp = "";

Array.from(calBtn).forEach(link => {
    link.addEventListener('click', function () {
        if (exp === "") {
            inputTxt.value = exp
        }
        if (link.textContent === 'x') {
            exp += "*"
        }
        else if (link.textContent === '÷') {
            exp += "/"
        }
        else {
            exp += link.textContent
        }
        inputTxt.value += link.textContent;

    });
});

Array.from(calBtnexp).forEach(link => {
    link.addEventListener('click', function () {
        if (exp != "") {

            if (link.textContent === 'x') {
                exp += "*"
            }
            else if (link.textContent === '÷') {
                exp += "/"
            }
            else {
                exp += link.textContent
            }
            inputTxt.value += link.textContent;
        }

    });
});



calEq.addEventListener("click", function () {
    calculateResult()
})
function calculateResult() {
    inputTxt.value = eval(exp)
    exp = eval(exp)
}



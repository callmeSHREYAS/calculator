let inputTxt=document.getElementById("cal-display")
const calBtn=document.querySelectorAll('.cal-btn')
Array.from(calBtn).forEach(link => {
    link.addEventListener('click', function() {
        inputTxt.value+=calBtn.textContent()
    });
});




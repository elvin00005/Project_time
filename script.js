const div = document.querySelector('.none')

// function changeDisplay() {
//     div.style.display = 'none'
// }
function showTime() {
    setInterval(function () {
        if (div.className == 'none') {
            div.className = 'block'
        }
        const today = new Date();
        const nowTime = today.toLocaleTimeString();
        div.innerHTML = nowTime;
    }, 1000)
}

// changeDisplay()


// setTimeout(() => showTime()
//     , 1000)
showTime()

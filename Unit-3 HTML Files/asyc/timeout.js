let time = 0;
let timeIdRef = null;

function startTimer() {
    if (timeIdRef != null) {
        return
    }

    timeIdRef = setInterval (function () {
        time++
        handleUpdateTime(time);

    },1000)

}

function stopTimer() {
    clearInterval (timeIdRef)
    timeIdRef = null
}

function resetTimer() {
    stopTimer()
    time=0
    handleUpdateTime(0)
}

function handleUpdateTime(time){
    const timeElement = document.getElementById("timer")
    timeElement.textContent = time;
}

window.addEventListener("load", function(){
    const startElement = document.getElementById("start")
    const stopElement = document.getElementById("stop")
    const resetElement = document.getElementById("reset")

    startElement.addEventListener("click", startTimer)
    stopElement.addEventListener("click", stopTimer)
    resetElement.addEventListener("click", resetTimer)
})
// Timer number
const hourElem = document.querySelector('.hour')
const minuteElem = document.querySelector('.minute')
const secondElem = document.querySelector('.second')
const millisecondElem = document.querySelector('.millisecond')
const resultElem = document.querySelector('.results')



//Buttons
const startButton = document.querySelector('.start')
const pauseButton = document.querySelector('.pause')
const stoptButton = document.querySelector('.stop')
const resultButton = document.querySelector('.finish')


//Variables
let hour = 00,
    minute = 00,
    second = 00,
    millisecond = 00,
    interval

//Event

startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)

});

pauseButton.addEventListener('click', () => {
    clearInterval(interval)


})

stoptButton.addEventListener('click', () => {
    clearInterval(interval)
    clearFunc()

})

let countResult = 0;
resultButton.addEventListener('click', () => {
    countResult++
    if (countResult > 30) {
        return null
    }
    clearInterval(interval)
    const resultBlock = document.createElement('div')
    resultBlock.innerHTML = `${countResult}.Result: ${hour}:${minute}:${second}:${millisecond}`
    resultElem.append(resultBlock)
    clearFunc()
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

//Code



function startTimer() {
    millisecond++
    if (millisecond < 9) {
        millisecondElem.innerHTML = '0' + millisecond;
    }
    if (millisecond > 9) {
        millisecondElem.innerHTML = millisecond;
    }
    if (millisecond > 99) {
        second++
        secondElem.innerHTML = '0' + second
        millisecond = 0;
        millisecondElem.innerHTML = '0' + millisecond;
    }
    if (second > 9) {
        secondElem.innerHTML = second
    }
    if (second > 60) {
        minute++
        minuteElem.innerHTML = '0' + minute
        second = 0;
        secondElem.innerHTML = '0' + second
    }
    if (minute > 9) {
        minuteElem.innerHTML = minute;
    }
    if (minute > 59) {
        hour++
        hourElem.innerHTML = '0' + hour
        minute = 0
        minuteElem.innerHTML = '0' + minute
    }
}

function clearFunc() {
    hour = 00
    minute = 00
    second = 00
    millisecond = 00
    hourElem.innerHTML = '00'
    secondElem.innerHTML = '00'
    minuteElem.innerHTML = '00'
    millisecondElem.innerHTML = '00'
}













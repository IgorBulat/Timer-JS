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


//Очистить



// let tripleButton = document.createElement('button');
// tripleButton.classList.add('button')
// tripleButton.classList.add('clear')
// tripleButton.innerHTML = 'Очистить'
// let buttonsElem = document.querySelector('.buttons')
// buttonsElem.append(tripleButton)

// tripleButton.addEventListener('click', function () {

// })

// // const carsList = [
// //     { brand: 'Tesla', year: 2015, color: 'Красный' },
// //     { brand: 'Lexus', year: 2016, color: 'Серебристый' },
// //     { brand: 'Nissan', year: 2012, color: 'Черный' },
// // ]

// // const generateAutoCard = (brand, color, year) => {
// //     return ` <div class="autoCard">
// //         <h2>${brand} YEAR</h2>
// //         <p>Автомобиль ${brand} - YEAR года. Возраст авто - YEARS лет.</p>
// //      </div>`
// // }

// // const carHtml = carsList.map(car => {
// //     return generateAutoCard(car.brand, car.color, car.year)
// // }).join('')

// // console.log(carHtml)


// const people = [
//     { name: 'Станислав', year: 2000 },
//     { name: 'Василий', year: 1986 },
//     { name: 'Александр', year: 1990 },
//     { name: 'Владимир', year: 2004 },
// ];

// const comments = [
//     { text: 'Отличный пост!', id: 523423 },
//     { text: 'Мне нравится', id: 823423 },
//     { text: 'Продолжай в том же духе', id: 2039842 },
//     { text: 'Все аццццтой !!!!!', id: 123523 },
//     { text: 'Нормально', id: 542328 }
// ];


// const uuu = [1, 'a', 'c', 3]

// const objRed = uuu.reduce((item, key, index) => {
//     item[index] = key
//     return item
// }, {})

// console.log(objRed)

// // из маассива в обьект- спред,обджект ассайню редюсе

// // из объекта в массив -object.keys, object.values,object.entries;

// let strAtt = 'привет, медвед'
// // strAtt = strAtt.replace('при', 'ПРИ');
// // console.log(strAtt);


// // console.log(cou(strAtt))



// // elem.insertAdjacentElement('beforeend', '<h2>Халоу</h2>')










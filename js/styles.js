'use strict'

var gIsShown = true

function init() {
    console.log('Hi')
}

function sayHi(num) {
    console.log('Hi', num)
}

function passEvent(ev) {
    console.log('Hi', ev)
}

function passThis(elBtn) {
    console.log('Hi', elBtn)
}

function getHeading() {
    const elHeading = document.querySelector('button')
    console.log(elHeading)
}

function getButtons() {
    const elBtns = document.querySelectorAll('button')
    console.log(elBtns, elBtns[0])
}

function changeHeading() {
    const elHeading = document.querySelector('h1')
    elHeading.innerText = 'Ezra'
}

function changeContent() {
    const elContainer = document.querySelector('.container')
    elContainer.innerHTML = `<button onclick="changeHeading()">Click Me</button>`
}

function styleHeading() {
    const elHeading = document.querySelector('h1')
    elHeading.style.color = 'red'
    elHeading.style.backgroundColor = 'lightblue'
}

function hideHeading() {
    const elHeading = document.querySelector('h1')
    elHeading.style.display = 'none'
}

function addClass(className) {
    const elHeading = document.querySelector('h2')
    elHeading.classList.add(className)
}

function toggleHeading() {
    const elHeading = document.querySelector('h1')
    
    if (gIsShown) {
        elHeading.style.display = 'none'
    } else {
        elHeading.style.display = 'block'
    }
    gIsShown = !gIsShown
}

function toggleHeading2() {
    const elHeading = document.querySelector('h1')
    
    elHeading.classList.toggle('hidden')
}

// function toggleHeading2() {
//     const elHeading = document.querySelector('h1')
    
//     if (gIsShown) {
//         elHeading.classList.add('hidden')
//     } else {
//         elHeading.classList.remove('hidden')
//     }
//     gIsShown = !gIsShown
// }

const first = document.querySelector('.heading1');
const firstContent = first.textContent;
const firstLetters = firstContent.split("");

// repacing the h1 contents with <span> surrounding each character
first.textContent = '';
for (let i = 0; i < firstLetters.length ; i++) {
    first.innerHTML += "<span>"+firstLetters[i]+"</span>";
}

// initializing a timer that adds a specific class to each <span> element
let char  = 0;
let timer  = setInterval(onTick, 200);

function onTick() {
    let item = document.querySelectorAll('span')[char];
    item.classList.add('fade');
    char++;
    if(char === firstLetters.length) {
        endTimer();
        return;
    }
}

function endTimer() {
    clearInterval(timer);
    timer = null;
}


/*
    Repeating the above process for the second <h1>
*/

const second = document.querySelector('.heading2');
const secondContent = second.textContent;
const secondLetters = secondContent.split("");

second.textContent = '';
for (let i = 0; i < secondLetters.length ; i++) {
    second.innerHTML += "<span class='two'>"+secondLetters[i]+"</span>";
}

let charTwo = 0;
let timerTwo = setInterval(onTickTwo, 250);

function onTickTwo() {
    let itemTwo = document.querySelectorAll('span.two')[charTwo];
    itemTwo.classList.add('fadeTwo');
    charTwo++;
    if(charTwo === secondLetters.length) {
        endTimerTwo();
        return;
    }
}

function endTimerTwo() {
    clearInterval(timerTwo);
    timerTwo = null;
}

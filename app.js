const day = document.querySelector('.days');
const hr = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const h1 = document.querySelector('h1');

function countDown() {
    let eventTime = new Date('14 may 2021')
    let curTime = new Date();
    let totalTime = eventTime - curTime;

    let totalSec = Math.floor(totalTime / 1000);
    let totalMin = Math.floor(totalSec / 60);
    let totalHr = Math.floor(totalMin / 60);
    let totalDay = Math.floor(totalHr / 24);

    let remSec =totalSec % 60;
    let remMin = totalMin % 60;
    let remHr = totalHr % 24;

    day.innerHTML = totalDay;
    hr.innerHTML = remHr
    min.innerHTML = remMin
    sec.innerHTML=remSec
}

countDown();
setInterval(countDown, 1000);


// cursor script--------------------

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', crMove)

function crMove(e) {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
}


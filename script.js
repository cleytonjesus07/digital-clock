const span = document.getElementById("clock");
const infoDay = document.getElementById("infoDay");

function startClock() {
    const date = new Date();

    const timeInfo = {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        time: {
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds()
        }
    }
    infoDay.innerHTML = `${timeInfo.day}/${timeInfo.month}/${timeInfo.year}`
    return `${timeInfo.time.hours < 10 ? '0' + timeInfo.time.hours : timeInfo.time.hours} : ${timeInfo.time.minutes < 10 ? '0' + timeInfo.time.minutes : timeInfo.time.minutes} : ${timeInfo.time.seconds < 10 ? '0' + timeInfo.time.seconds : timeInfo.time.seconds}`
}

setInterval(() =>{ 
    document.title = `Relógio digital (${startClock()})`;
    span.innerHTML = startClock()
}, 1000);



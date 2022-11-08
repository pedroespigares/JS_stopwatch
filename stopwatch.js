let start = document.getElementById('start');

let stopper = document.getElementById('stop');

let reset = document.getElementById('reset');

start.addEventListener('click', () => {
    timer = setInterval(() => {
        let time = document.getElementById('seconds');
        let seconds = Number(time.innerHTML);
        seconds++;
        if(time.innerHTML < 9) {
            time.innerHTML = "0" + seconds;
        } else {
            time.innerHTML = seconds;
        }
        if(seconds === 60) {
            let minutes = document.getElementById('minutes');
            let minutesNumber = Number(minutes.innerHTML);
            minutesNumber++;
            if(minutes.innerHTML < 9) {
                minutes.innerHTML = "0" + minutesNumber;
            } else {
                minutes.innerHTML = minutesNumber;
            }
            time.innerHTML = "00";
        }
    }, 1000);

    start.disabled = true;
});

stopper.addEventListener('click', () => {
    clearInterval(timer);

    start.disabled = false;
});

reset.addEventListener('click', () => {
    if(timer) {
        clearInterval(timer);
    }
    let time = document.getElementById('seconds');
    let minutes = document.getElementById('minutes');
    time.innerHTML = "00";
    minutes.innerHTML = "00";

    start.disabled = false;
});
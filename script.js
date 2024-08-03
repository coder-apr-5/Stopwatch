console.log("from script file");
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);

function start() {
    if (!timer) {
        timer = setInterval(run, 10);
    }
}

function run() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    document.getElementById('milliseconds').textContent = formatTime(Math.floor(milliseconds / 10));
    document.getElementById('seconds').textContent = formatTime(seconds);
    document.getElementById('minutes').textContent = formatTime(minutes);
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    clearInterval(timer);
    timer = null;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('milliseconds').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    document.getElementById('minutes').textContent = '00';
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
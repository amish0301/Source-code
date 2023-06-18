let timerDisplay = document.querySelector(".display");

let startBtn = document.getElementById("startbtn");
let stopBtn = document.getElementById("stopbtn");
let resetBtn = document.getElementById("resetbtn");

let msec = 00;
let sec = 00;
let min = 00;
let timerId = null;

// main logic of buttons
startBtn.addEventListener("click", () => {
  if (timerId !== null) clearInterval(timerId);
  timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerDisplay.innerHTML = `00 : 00 : 00`;
});

// helper which interwally runs
function startTimer() {
  msec++;
  if (msec == 1000) {
    msec = 0;
    sec++;

    if (sec == 60) {
      sec = 0;
      min++;
    }
  }

  let msecstr = msec < 10 ? `0${msec}` : msec;
  let secstr = sec < 10 ? `0${sec}` : sec;
  let minstr = min < 10 ? `0${min}` : min;

  timerDisplay.innerHTML = `${minstr} : ${secstr} : ${msecstr}`;
}

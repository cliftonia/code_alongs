var timerH1Object = document.querySelector("#timer");
var timerH1 = timerH1Object.textContent;

var stBtnObject = document.querySelector("#start");

var resBtnObject = document.querySelector("#reset");
var resBtn = resBtnObject.textContent;

var pauseBtnObject = document.querySelector("#pause");
var pauseBtn = pauseBtnObject.textContent;

var counter = 0;
var timerId = null;

var timerStart = function() {
  if (timerId) {
    // guard condition || early return
    return;
  }
  timerId = setInterval(timerDisplay, 1000);
};

var timerDisplay = function() {
  timerH1Object.textContent = counter;
  counter = counter + 1;
};

var reset = function() {
  clearInterval(timerId);
  timerId = null;
  counter = 0;
  timerH1Object.textContent = "Stop Watch";
};

var pause = function() {
  clearInterval(timerId);
  timerId = null;
};

resBtnObject.addEventListener("click", reset);
stBtnObject.addEventListener("click", timerStart);
pauseBtnObject.addEventListener("click", pause);

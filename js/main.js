const sec = document.querySelector(".s");
const min = document.querySelector(".m");
const hour = document.querySelector(".h");
const hourNumber = document.querySelector(".hours");
const minNumber = document.querySelector(".minutes");

function clock() {
  let time = new Date();
  let seconds = 6 * time.getSeconds();
  let minutes = 6 * time.getMinutes();
  let hours = 30 * time.getHours();
  sec.style.transform = `rotate(${seconds}deg)`;
  min.style.transform = `rotate(${minutes}deg)`;
  hour.style.transform = `rotate(${hours}deg)`;
  minNumber.innerHTML =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  hourNumber.innerHTML =
    time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  setTimeout(() => {
    clock();
  }, 1000);
}

clock();

const links = document.querySelectorAll(".tabsItem");
const tabs = document.querySelectorAll(".tabsContentItem");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (event) {
    event.preventDefault();
    for (let j = 0; j < links.length; j++) {
      links[j].classList.remove("active");
      tabs[j].classList.remove("active");
    }
    this.classList.add("active");
    tabs[i].classList.add("active");
  });
}

const start = document.querySelector(".stopwatch__btn");
const secund = document.querySelector(".stopwatch__seconds");
const minutesStart = document.querySelector(".stopwatch__minutes");
const secundSpan = document.querySelector(".tabsLink__span");

/* start.addEventListener("click", test);

function test() {
  if (start.innerHTML === "start") {
    function startTest() {
      secundSpan.classList.add("active");
      start.innerHTML = "Stop";
      if (secund.innerHTML < 60) {
        secund.innerHTML = +secund.innerHTML + 1;
      }

      if (secund.innerHTML == 60) {
        secund.innerHTML = 0;
        if (minutesStart.innerHTML < 60) {
          minutesStart.innerHTML = +minutesStart.innerHTML + 1;
        }

        if (minutesStart.innerHTML == 60) {
          minutesStart.innerHTML = 0;
          if (hoursStart.innerHTML < 24) {
            hoursStart.innerHTML = +hoursStart.innerHTML + 1;
          }

          if (hoursStart.innerHTML == 24) {
            hoursStart.innerHTML = 0;
          }
        }
      }
      setTimeout(startTest, 1000);
    }
    startTest();
  } else if (start.innerHTML === "Stop") {
    function stopTest() {
      secundSpan.classList.remove("active");
      secundSpan.classList.add("active_clear");
      start.innerHTML = "Clear";
    }
    stopTest();
  }
} */

start.onclick = test;
var stopNum;
function test() {
  console.log(start.innerHTML);
  if (start.innerHTML === "start") {
    start.innerHTML = "Stop";
    function startTest() {
      secundSpan.classList.add("active");

      if (secund.innerHTML < 60) {
        secund.innerHTML = +secund.innerHTML + 1;
      }

      if (secund.innerHTML == 60) {
        secund.innerHTML = 0;
        if (minutesStart.innerHTML < 60) {
          minutesStart.innerHTML = +minutesStart.innerHTML + 1;
        }

        if (minutesStart.innerHTML == 60) {
          minutesStart.innerHTML = 0;
          if (hoursStart.innerHTML < 24) {
            hoursStart.innerHTML = +hoursStart.innerHTML + 1;
          }

          if (hoursStart.innerHTML == 24) {
            hoursStart.innerHTML = 0;
          }
        }
      }
    }
    stopNum = setInterval(startTest, 1000);
  } else if (start.innerHTML === "Stop") {
    clearInterval(stopNum);
    function stopTest() {
      secundSpan.classList.remove("active");
      secundSpan.classList.add("active_clear");
      start.innerHTML = "Clear";
      secund.innerHTML = secund.innerHTML;
      minutesStart.innerHTML = minutesStart.innerHTML;
      hoursStart.innerHTML = hoursStart.innerHTML;
    }
    stopTest();
  } else {
    start.innerHTML = 'start';
    secundSpan.classList.remove("active_clear");
    secund.innerHTML = 0;
    minutesStart.innerHTML = 0;
    hoursStart.innerHTML = 0;
  }
}

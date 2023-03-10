const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const yearEl = document.querySelector("#year");
const inputEl = document.querySelector("input");
// const gradBtn = document.querySelector("#grad-btn");
const newYearBtn = document.querySelector("#new-year-btn");

let newDate;
let currentTime;

// const currentYear = new Date();
// yearEl.innerHTML = currentYear.getFullYear;

yearEl.innerHTML = new Date().getFullYear();

inputEl.addEventListener("change", (e) => {
  const selectedDate = new Date(e.target.value);

  if(selectedDate < currentTime) {
      alert("Please enter appropriate time");
  } else {
    newDate = selectedDate;
    countDown();
  }

});

//graduation button clicked
// gradBtn.addEventListener("click", function(e) {
//     newDate = "20 july 2022";
//     countDown();
// })

// new year button clicked
newYearBtn.addEventListener("click",function() {
    newDate = "1 Jan 2024";
    countDown();
})

function countDown() {
  currentTime = new Date();
  const newDateTime = new Date(newDate);
  const remainingSeconds = Math.floor((newDateTime - currentTime) / 1000);

  const days = Math.floor(remainingSeconds/60/60/24);
  const hours = Math.floor(remainingSeconds / 60 /60) % 24;
  const minutes = Math.floor(remainingSeconds / 60) % 60;
  const seconds = remainingSeconds % 60;
  
  daysEl.innerHTML = formatNumber(days);
  hoursEl.innerHTML = formatNumber(hours);
  minutesEl.innerHTML = formatNumber(minutes);
  secondsEl.innerHTML = formatNumber(seconds);

  const timer = setInterval(countDown,1000);
}

function formatNumber(number) {
    return number < 10 ? `0${number}` : number;
}

// initial call



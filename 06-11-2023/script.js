"use-strict";
function time() {
  const clock = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const FD = {
    date: clock.getDate() < 12 ? "0" + clock.getDate() : clock.getDate(),
    hours: clock.getHours() < 10 ? "0" + clock.getHours() : clock.getHours(),
    minutes:
      clock.getMinutes() < 10 ? "0" + clock.getMinutes() : clock.getMinutes(),
    seconds:
      clock.getUTCSeconds() < 10
        ? "0" + clock.getUTCSeconds()
        : clock.getUTCSeconds(),
    year: clock.getUTCFullYear(),
    month: month[clock.getUTCMonth()],
    day: days[clock.getDay()],
  };
  const FDR = Object.values(FD);
  const full_date = document.querySelector(".full-date");
  full_date.textContent = `${FD.day},${FD.date} ${FD.month} ${FD.year}`;
  const counts = document.querySelectorAll(".count");
  counts.forEach((e, id) => {
    e.textContent = FDR[id];
  });
}
setInterval(() => {
  time();
  console.log("working");
}, 1000);

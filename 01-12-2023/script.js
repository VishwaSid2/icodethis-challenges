setInterval(() => {
  const current = new Date();
  const dates = "2023-12-24 23:59:59";
  const edt = new Date(dates);
  const baldate = edt - current;
  console.log(Math.ceil(baldate / (1000 * 60 * 60 * 24)));
  const singleday = 1000 * 60 * 60 * 24;
  const times = {
    day: document.querySelector(".time.days h1"),
    hours: document.querySelector(".time.hours h1"),
    minutes: document.querySelector(".time.minutes h1"),
    seconds: document.querySelector(".time.seconds h1"),
  };
  times.day.textContent =
    Math.floor(baldate / singleday) > 10
      ? Math.floor(baldate / singleday)
      : `0${Math.floor(baldate / singleday)}`;
  times.hours.textContent =
    Math.floor((baldate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) > 10
      ? Math.floor((baldate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      : `0${Math.floor((baldate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`;
  times.minutes.textContent =
    Math.floor((baldate % (1000 * 60 * 60)) / (1000 * 60)) > 10
      ? Math.floor((baldate % (1000 * 60 * 60)) / (1000 * 60))
      : `0${Math.floor((baldate % (1000 * 60 * 60)) / (1000 * 60))}`;
  times.seconds.textContent =
    Math.floor((baldate % (1000 * 60)) / 1000) < 10
      ? `0${Math.floor((baldate % (1000 * 60)) / 1000)}`
      : Math.floor((baldate % (1000 * 60)) / 1000);
}, 1000);

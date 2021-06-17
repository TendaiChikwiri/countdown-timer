const countdown = () => {
  const countDate = new Date("December 16, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Calculate the time remaining
  let textDays = Math.floor(gap / day);
  let textHours = Math.floor((gap % day) / hour);
  let textMinutes = Math.floor((gap % hour) / minute);
  let textSeconds = Math.floor((gap % minute) / second);

  // Adding leading zero
  if (textDays < 10) textDays = "0" + textDays;
  if (textHours < 10) textHours = "0" + textHours;
  if (textMinutes < 10) textMinutes = "0" + textMinutes;
  if (textSeconds < 10) textSeconds = "0" + textSeconds;

  // Render the time
  document.getElementById("day").innerHTML = textDays;
  document.getElementById("hour").innerHTML = textHours;
  document.getElementById("minute").innerHTML = textMinutes;
  document.getElementById("second").innerHTML = textSeconds;
};

setInterval(countdown, 1000);

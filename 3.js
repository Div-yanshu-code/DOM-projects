document.addEventListener('DOMContentLoaded', function () {
  const clockBox = document.querySelector('#clock-box');

  setInterval(function () {
    let date = new Date();
    clockBox.innerHTML = date.toLocaleTimeString();
  }, 1000);
});

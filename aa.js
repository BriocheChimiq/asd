let button = document.querySelector('.close__popup');
let button2 = document.querySelectorAll('.root__presentButton');
let popup = document.querySelector('.popup');

const days = document.querySelector('.days')
const minutes = document.querySelector('.minutes')
const hours = document.querySelector('.hours')
const seconds = document.querySelector('.seconds')

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);

const updateCountdownTime = function () {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;
  console.log(m)
  days.innerHTML = d + ' days';
  hours.innerHTML = h + ' hours';
  minutes.innerHTML = m + ' min';
  seconds.innerHTML = s + ' sec';
}

button2.forEach(function (lm) {
    lm.addEventListener('click', function () {
        popup.style.display = 'block';
    })
  });

button.addEventListener('click', function () {
  console.log('kek')
  popup.style.display = 'none';
})

updateCountdownTime()
setInterval(updateCountdownTime, 1000)
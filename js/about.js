const barBlue = document.querySelector('.blue-bar');
const barRed = document.querySelector('.red-bar');
const barYellow = document.querySelector('.yellow-bar');
const barGreen = document.querySelector('.green-bar');

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function barsSlideIn() {
  barBlue.classList.add('bar-slideIn');
  sleep(200).then(() => {
    barRed.classList.add('bar-slideIn');
    sleep(200).then(() => {
      barYellow.classList.add('bar-slideIn');
      sleep(200).then(() => {
        barGreen.classList.add('bar-slideIn');
      })
    })
  })
}

barsSlideIn();
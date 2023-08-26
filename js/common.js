const header = document.querySelector('header');
const btnGoTop = document.getElementById('go-top-button');

addEventListener('mousewheel', (event) => {
  if (event.deltaY > 0) {
    header.classList.add('clear');
  } else {
    header.classList.remove('clear');
  }
});

btnGoTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
  header.classList.remove('clear');
});
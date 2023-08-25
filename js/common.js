const header = document.querySelector('header');

addEventListener('mousewheel', (event) => {
  if (event.deltaY > 0) {
    header.classList.add('clear');
  } else {
    header.classList.remove('clear');
  }
});
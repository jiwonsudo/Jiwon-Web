const header = document.querySelector('header');
const btnGoTop = document.getElementById('go-top-button');

let preScrollTop = 0;

addEventListener('scroll', () => {
  let nextScrollTop =  window.scrollY || window.pageYOffset;

  if (nextScrollTop < 50) {
    header.classList.remove('clear');
  } else {
    if (preScrollTop < nextScrollTop) { //down
      header.classList.add('clear');
    } else { // up
      header.classList.remove('clear');
    }
  }

  preScrollTop = nextScrollTop;
});

btnGoTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
  header.classList.remove('clear');
});
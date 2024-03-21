const header = document.querySelector('header');
const btnGoTop = document.getElementById('go-top-button');

let preScrollTop = 0;
let isMobile = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) <= 580 ? true : false;
const minScrollHeight = isMobile ? 100 : 30;

addEventListener('scroll', () => {
  let nextScrollTop =  window.scrollY || window.pageYOffset;

  console.log(nextScrollTop)

  if (nextScrollTop < minScrollHeight) {
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
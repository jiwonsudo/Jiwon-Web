// MainImage-ScrollEffect feature
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

addEventListener('scroll',() => {
  let nextScrollTop =  window.scrollY || window.pageYOffset;

  if ((nextScrollTop / vh) > 0.05) {
    document.querySelector('header').classList.add('white');
    document.querySelector('.logo-text').classList.add('black');
    document.querySelectorAll('.nav-a').forEach((element) => {
      element.classList.add('black');
    });
    document.querySelector('.logo-img').src = './images/assets/main_logo_black.svg';
  } else {
    document.querySelector('header').classList.remove('white');
    document.querySelector('.logo-text').classList.remove('black');
    document.querySelectorAll('.nav-a').forEach((element) => {
      element.classList.remove('black');
    });
    document.querySelector('.logo-img').src = './images/assets/main_logo_pink.svg';
  }
});

document.getElementById('go-top-button').addEventListener('click', () => {
  document.querySelector('header').classList.remove('white');
  document.querySelector('.logo-text').classList.remove('black');
  document.querySelectorAll('.nav-a').forEach((element) => {
    element.classList.remove('black');
  });
  document.querySelector('.logo-img').src = './images/assets/main_logo_pink.svg';
});
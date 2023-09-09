const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

addEventListener('scroll',() => {
  let nextScrollTop =  window.scrollY || window.pageYOffset;

  if ((nextScrollTop / vh) > 0.05) {
    document.querySelector('header').classList.add('white');
  } else document.querySelector('header').classList.remove('white');
});
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

// Image auto width feature (in image-container)
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

if (vw > 580) {
  document.querySelectorAll('.image-container').forEach((div) => {
    let numOfChildren = div.childElementCount;
    Array.from(div.children).forEach((imgElement) => {
      imgElement.style.width = `${97 / numOfChildren}%`;
    });
  });

  // document.querySelector('.image-container').style.display = 'block';
}
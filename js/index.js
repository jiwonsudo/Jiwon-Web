const mainImage = document.getElementById('main-image');

const carouselSlide = document.querySelector('.slide-list');
const carouselContents = document.querySelectorAll('.slide-item');

const prevBtn = document.querySelector('.left-button');
const nextBtn = document.querySelector('.right-button');

// MainImage-ScrollEffect feature
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

addEventListener('scroll',() => {
  let nextScrollTop =  window.scrollY || window.pageYOffset;

  if ((nextScrollTop / vh) <= 1 && (nextScrollTop / vh) > 0) {
    if (preScrollTop < nextScrollTop) {
      mainImage.style.top = `${nextScrollTop / 8}px`;
    } else {
      mainImage.style.top = `${nextScrollTop / 8}px`;
    }
  }

  if ((nextScrollTop / vh) > 0.05) {
    document.querySelector('header').classList.add('black');
  } else document.querySelector('header').classList.remove('black');

  if (nextScrollTop <= 0.1) mainImage.style.top = '0px';
});

// Carousel feature

// Duplicate first and last cards
const numOfCards = document.querySelector('.slide-list').childElementCount - 2;
document.getElementById('clone-of-first').innerHTML = document.querySelector('.slide-list :nth-child(2)').innerHTML;
document.getElementById('clone-of-last').innerHTML = document.querySelector(`.slide-list :nth-child(${numOfCards + 1})`).innerHTML;

// Add carousel movement
let slideCounter = 1;
const size = carouselContents[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + -size * slideCounter + 'px)';

nextBtn.addEventListener('click', () => {
  if (slideCounter >= carouselContents.length - 1) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  slideCounter++;
  carouselSlide.style.transform = 'translateX(' + -size * slideCounter + 'px)';
});

prevBtn.addEventListener('click', () => {
  if (slideCounter <= 0) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  slideCounter--;
  carouselSlide.style.transform = 'translateX(' + -size * slideCounter + 'px)';
});

carouselSlide.addEventListener('transitionend', function () {
  if (carouselContents[slideCounter].id === 'clone-of-last') {
    carouselSlide.style.transition = 'none';
    slideCounter = carouselContents.length - 2;
    carouselSlide.style.transform = 'translateX(' + -size * slideCounter + 'px)';
  }
  if (carouselContents[slideCounter].id === 'clone-of-first') {
    carouselSlide.style.transition = 'none';
    slideCounter = carouselContents.length - slideCounter;
    carouselSlide.style.transform = 'translateX(' + -size * slideCounter + 'px)';
  }
});

// Erase SlideItems Feature
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

function removeElementsByClass(className){
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
  }
}

if (vw <= 950) removeElementsByClass('removable');

// clear header feature

document.getElementById('go-top-button').addEventListener('click', () => {
  window.scrollTo(0, 0);
  header.classList.remove('black');
});
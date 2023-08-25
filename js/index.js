const mainImage = document.getElementById('main-image');

const carouselSlide = document.querySelector('.slide-list');
const carouselContents = document.querySelectorAll('.slide-item');

const prevBtn = document.querySelector('.left-button');
const nextBtn = document.querySelector('.right-button');

// MainImage-ScrollEffect feature
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

addEventListener('mousewheel', (event) => {
  if ((scrollY / vh) <= 1 && (scrollY / vh) > 0) {
    if (event.deltaY > 0) {
      mainImage.style.top = `${scrollY / 10}px`;
    } else {
      mainImage.style.top = `${scrollY / 10}px`;
    }
  }
});

// Carousel feature
let slideCounter = 1;
const size = carouselContents[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + -size * slideCounter + 'px)';

nextBtn.addEventListener('click', () => {
  if (slideCounter >= carouselContents.length - 1) return;
  carouselSlide.style.transition = 'transform 0.3s ease-in-out';
  slideCounter++;
  carouselSlide.style.transform = 'translateX(' + -size * slideCounter + 'px)';
});

prevBtn.addEventListener('click', () => {
  if (slideCounter <= 0) return;
  carouselSlide.style.transition = 'transform 0.3s ease-in-out';
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
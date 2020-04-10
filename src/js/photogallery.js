const back = document.querySelector('.popup_back');
const minPhotos = document.querySelectorAll('.min-photo');
const closePopupIcon = document.querySelector('.close-popup-icon');
const slides = document.querySelectorAll('.slide');
const prevSlideArrow = document.querySelector('.arrow_prev');
const nextSlideArrow = document.querySelector('.arrow_next');

let mainSlide = null;
let start = null;

const manageSliderOnKeyDown = event => {
  event.stopPropagation();

  if (back.className.match('closed')) {
    event.key === 'Enter' &&
      showFirstSlide(event);
  }

  if (back.className.match('opened')) {
    event.key === 'ArrowLeft' &&
      handleArrows(-1);

    event.key === 'ArrowRight' &&
      handleArrows(1);

    event.key === 'Escape' &&
      hideSlider();
  }
};

const showFirstSlide = event => {
  if (back.className.match('closed')) {
    createDots();

    back.className = 'popup_back opened';

    const clickedAlt = event.target.getAttribute('alt');
    let altToCompare = null;

    slides.forEach((slide, index) => {
      altToCompare = slide.getAttribute('alt');
      slide.style.display = 'none';

      if (clickedAlt === altToCompare) {
        slide.style.display = 'block';
        mainSlide = index;
        start = index;

        handleArrows();
      }
    });
  }
};

const handleArrowsOnClick = event => {
  event.target.className.match('prev') ?
    handleArrows(-1) :
    handleArrows(1);
};

const handleArrows = index => {
  if (
    (index === -1 && mainSlide === 0) ||
    (index === 1 && mainSlide === slides.length - 1)
  ) index = null
  else if (index === undefined) mainSlide = start
  else mainSlide += index;

  mainSlide === 0 ?
    prevSlideArrow.style.display = 'none' :
    prevSlideArrow.style.display = 'block';

  mainSlide === slides.length - 1 ?
    nextSlideArrow.style.display = 'none' :
    nextSlideArrow.style.display = 'block';

  showSlides();
};

const showSlides = () => {
  slides.forEach(slide => slide.style.display = 'none');

  for (let i = start; i < slides.length; i++) {
    slides[mainSlide].style.display = 'block';

    currentSlide();
  }
};

const currentSlide = () => {
  const dots = document.querySelectorAll('.dot');

  dots.forEach(dot => dot.style.backgroundColor = 'oldlace');

  for (let i = start; i < dots.length; i++) {
    dots[mainSlide].style.backgroundColor = 'saddlebrown';
  }
};

const createDots = () => {
  const dotsContainer = document.querySelector('.dots');

  dotsContainer.innerHTML = '';

  slides.forEach(slide => {
    const dot = document.createElement('span');
    dot.setAttribute('class', 'dot');
    dotsContainer.appendChild(dot);
  });
};

const hideSlider = () => {
  back.className = 'popup-back closed';
  mainSlide = null;
  start = null;
};

if (back) {
  window.addEventListener('keydown', manageSliderOnKeyDown);
  minPhotos.forEach(photo => photo.addEventListener('keydown', manageSliderOnKeyDown));
  minPhotos.forEach(photo => photo.addEventListener('click', showFirstSlide));
  prevSlideArrow.addEventListener('click', handleArrowsOnClick);
  nextSlideArrow.addEventListener('click', handleArrowsOnClick);
  closePopupIcon.addEventListener('click', hideSlider);
}

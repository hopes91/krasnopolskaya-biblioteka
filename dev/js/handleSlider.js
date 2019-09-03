const miniPhotos = document.querySelectorAll('.mini-photo');
const back = document.getElementById('back');
const slides = document.querySelectorAll('.slide');
const closeIcon = document.getElementById('close');

let mainSlide = null;
let start = null;

const showFirstSlideOnKeyDown = event => {
	if (event.key === 'Enter') {
		showFirstSlide(event);
	}
}

const showFirstSlide = event => {
	addDots();

	back.style.display = 'block';

	let clickedAlt = event.target.getAttribute('alt');
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

const handleArrowsOnKeyDown = event => {
	if (event.key === 'ArrowLeft') {
		handleArrows(-1);
	} else if (event.key === 'ArrowRight') {
		handleArrows(1);
	}
}

const handleArrows = index => {
	const prevSlide = document.querySelector('.prev-slide');
	const nextSlide = document.querySelector('.next-slide');

	if ((index === -1 && mainSlide === 0) ||
			(index === 1 && mainSlide === slides.length - 1)) {
		index = null;
	} else if (index === undefined) {
		mainSlide = start;
	} else {
		mainSlide += index;
	}

	if (mainSlide === 0) {
		prevSlide.style.display = 'none';
	} else {
		prevSlide.style.display = 'block';
	}

	if (mainSlide === slides.length - 1) {
		nextSlide.style.display = 'none';
	} else {
		nextSlide.style.display = 'block';
	}

	showSlides();
}

const showSlides = () => {
	slides.forEach(slide => slide.style.display = 'none');

	for (let i = start; i < slides.length; i++) {
		slides[mainSlide].style.display = 'block';
		currentSlide();
	}
}

const addDots = () => {
	const dots = document.querySelector('.dots');

	dots.innerHTML = '';

	for (let i = 0; i < miniPhotos.length; i++) {
    const dot = document.createElement('span');
    dot.setAttribute('class', 'dot');
    dots.appendChild(dot);
  }
}

const currentSlide = () => {
	const allDots = document.querySelectorAll('.dot');

	allDots.forEach(dot => dot.style.backgroundColor = 'oldlace');

	for (let i = start; i < allDots.length; i++) {
		allDots[mainSlide].style.backgroundColor = 'saddlebrown';
	}
}

const hideSliderOnKeyDown = event => {
	if (event.key === 'Escape') {
		hideSlider();
	}
}

const hideSlider = () => {
	mainSlide = null;
	start = null;
	back.style.display = 'none';
}

if (back) {
	miniPhotos.forEach(photo => photo.addEventListener('keydown', showFirstSlideOnKeyDown));
	miniPhotos.forEach(photo => photo.addEventListener('click', showFirstSlide));
	window.addEventListener('keydown', handleArrowsOnKeyDown);
	window.addEventListener('keydown', hideSliderOnKeyDown);
	closeIcon.addEventListener('click', hideSlider);
}

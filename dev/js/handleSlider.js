let miniPhotos = document.querySelectorAll('.mini-photo');
let back = document.getElementById('back');
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let prevSlide = document.querySelector('.prev-slide');
let nextSlide = document.querySelector('.next-slide');

let mainSlide = null;
let start = null;

function showFirstSlide() {
	back.style.display = 'block';

	let clickedAlt = this.getAttribute('alt');
	let comparedAlt = null;

	slides.forEach((slide, index) => {
		comparedAlt = slide.getAttribute('alt');
		slide.style.display = 'none';

		if (clickedAlt === comparedAlt) {
			slide.style.display = 'block';
			mainSlide = index;
			start = index;
			currentSlide(mainSlide);
		}

		if (start === 0) {
			prevSlide.style.display = 'none';
		} else if (start === miniPhotos.length - 1) {
			nextSlide.style.display = 'none';
		} else {
			prevSlide.style.display = 'block';
			nextSlide.style.display = 'block';
		}
	});
}

const moveSlides = index => {
	mainSlide += index;

	if (mainSlide < 1) {
		prevSlide.style.display = 'none';
	} else {
		prevSlide.style.display = 'block';
	}

	if (mainSlide > slides.length - 2) {
		nextSlide.style.display = 'none';
	} else {
		nextSlide.style.display = 'block';
	}

	slides.forEach(slide => slide.style.display = 'none');

	for (let i = start; i < slides.length; i++) {
		slides[mainSlide].style.display = 'block';
		currentSlide(mainSlide);
	}
}

const currentSlide = () => {
	dots.forEach(dot => dot.style.backgroundColor = 'oldlace');

	for (let i = start; i < dots.length; i++) {
		dots[mainSlide].style.backgroundColor = 'saddlebrown';
	}
}

const hideSlider = () => {
	mainSlide = null;
	start = null;
	back.style.display = 'none';
}

miniPhotos.forEach(photo => photo.addEventListener('click', showFirstSlide));
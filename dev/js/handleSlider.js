const miniPhotos = document.querySelectorAll('.mini-photo');
const back = document.getElementById('back');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevSlide = document.querySelector('.prev-slide');
const nextSlide = document.querySelector('.next-slide');
const closeIcon = document.getElementById('close');
const navbar = document.querySelector('.navbar');
const dropdown = document.querySelector('.dropdown');

let mainSlide = null;
let start = null;

function showFirstSlide() {
	back.style.display = 'block';
  navbar.style.position = 'static';

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

function moveSlides(index) {
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

function currentSlide() {
	dots.forEach(dot => dot.style.backgroundColor = 'oldlace');

	for (let i = start; i < dots.length; i++) {
		dots[mainSlide].style.backgroundColor = 'saddlebrown';
	}
}

function hideSlider() {
	mainSlide = null;
	start = null;
  navbar.style.position = 'relative';
	back.style.display = 'none';
}

miniPhotos.forEach(photo => photo.addEventListener('click', showFirstSlide));
closeIcon.addEventListener('click', hideSlider);

// start for IE
const forEach = require('./forIE/forEach.js');

forEach();
// end for IE

const burger = document.getElementById('burger');
const dropdownSections = document.querySelectorAll('.dropdown-section');

const toggleDropSectionTabIndex = () => {
  if (window.innerWidth <= 800) {
		burger.setAttribute('tabindex', '0');
		dropdownSections.forEach(section => section.children[0].setAttribute('tabindex', '0'));
  }

  if (window.innerWidth > 800) {
    burger.setAttribute('tabindex', '-1');
  	dropdownSections.forEach(section => section.children[0].setAttribute('tabindex', '-1'));
  }
};

const toggleDropSectionLinksTabIndex = isOpen => {
  const sectionLinks = document.querySelectorAll('.dropdown .section-links a');

  isOpen ?
    sectionLinks.forEach(link => link.setAttribute('tabindex', '0')) :
    sectionLinks.forEach(link => link.setAttribute('tabindex', '-1'));
};

const toggleBurgerOnKeyDown = event => {
  event.key === 'Enter' &&
    toggleBurger();
};

const toggleBurger = () => {
  const burgerSpans = document.querySelectorAll('#burger span');

  if (burgerSpans[0].className === '') {
    burgerSpans[0].className = 'span-one_active';
    burgerSpans[2].className = 'span-three_active';
    setTimeout(() => burgerSpans[1].className = 'span-two_active', 200);
  } else {
    burgerSpans[0].className = '';
    burgerSpans[2].className = '';
    setTimeout(() => burgerSpans[1].className = '', 200);
  }

  toggleDropdown();
};

const toggleDropdown = () => {
  const dropdownMenu = document.querySelector('.dropdown .dropdown-menu');

  if (dropdownMenu) {
	  dropdownMenu.className.match('closed') ?
	    dropdownMenu.className = 'dropdown-menu opened' :
	    dropdownMenu.className = 'dropdown-menu closed';
	}
};

const toggleDropSectionLinksOnKeyDown = event => {
  event.key === 'Enter' &&
    toggleDropSectionLinks(event);
};

const toggleDropSectionLinks = event => {
  const dropdownLinks = event.currentTarget.children[1];

  if (dropdownLinks) {
	  if (dropdownLinks.className.match('closed')) {
	    dropdownLinks.className = 'section-links opened';

	    toggleDropSectionLinksTabIndex(true);
	  } else {
	    dropdownLinks.className = 'section-links closed';

	    toggleDropSectionLinksTabIndex(false);
	  }
	}
};

window.addEventListener('load', toggleDropSectionTabIndex);
window.addEventListener('resize', toggleDropSectionTabIndex);
burger.addEventListener('keydown', toggleBurgerOnKeyDown);
burger.addEventListener('click', toggleBurger);
dropdownSections.forEach(section => section.addEventListener('click', toggleDropSectionLinks));

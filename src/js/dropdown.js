const burger = document.getElementById('burger');

const toggleDropdown = event => {
	burger.nextElementSibling.className.match('closed') ?
		showDropdown(burger.children):
    hideDropdown(burger.children);
};

const showDropdown = burgerSpans => {
	burgerSpans[0].className = 'span-one_active';
	burgerSpans[2].className = 'span-three_active';
	setTimeout(() => {
		burgerSpans[1].className = 'span-two_active';
	}, 200);

	burger.nextElementSibling.className = 'dropdown-menu opened';
};

const hideDropdown = burgerSpans => {
	burgerSpans[0].className = '';
	burgerSpans[2].className = '';
	setTimeout(() => {
		burgerSpans[1].className = '';
	}, 200);

	burger.nextElementSibling.className = 'dropdown-menu closed';
};

const dropdownSections = document.querySelectorAll('.dropdown-section');

const toggleDropdownLinks = event => {
  const sectionLinks = event.currentTarget.children[1];

  if (sectionLinks) {
    sectionLinks.className.match('closed') ?
      sectionLinks.className = 'section-links opened':
      sectionLinks.className = 'section-links closed';
  }
};

burger.addEventListener('click', toggleDropdown);
dropdownSections.forEach(section => section.addEventListener('click', toggleDropdownLinks));

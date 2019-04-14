let burger = document.getElementById('burger');
let dropdownSections = document.querySelectorAll('.dropdown-section');

const toggleDropdownTabindex = () => {
	let dropdownSections = document.querySelectorAll('.dropdown-section');

  if (window.innerWidth > 800) {
  	burger.setAttribute('tabindex', '-1');
    dropdownSections.forEach(section => {
      if (section.hasAttribute('tabindex')) {
        section.setAttribute('tabindex', '-1');
      } else {
        section.children[0].setAttribute('tabindex', '-1');
      }
    });
  } else if (window.innerWidth <= 800) {
  	burger.setAttribute('tabindex', '0');
    dropdownSections.forEach(section => {
      if (section.hasAttribute('tabindex')) {
        section.setAttribute('tabindex', '0');
      } else {
        section.children[0].setAttribute('tabindex', '0');
      }
    });
  }
}

const toggleBurgerOnKeyDown = event => {
	if (event.key === 'Enter') {
    toggleBurger(event);
  }
}

const toggleBurger = event => {
	let parentId = event.target.parentNode.id;

	if (event.target.id === 'burger' || parentId === 'burger') {
		let burgerSpans = document.querySelectorAll('#burger span');

		burgerSpans[0].classList.toggle('span-one-active');
		burgerSpans[2].classList.toggle('span-three-active');
		setTimeout(() => {
			burgerSpans[1].classList.toggle('span-two-active');
		}, 200);

		toggleDropdownMenu();
	}
}

const toggleDropdownMenu = () => {
	let dropdownMenu = document.getElementById('drop-menu');

	if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
		dropdownMenu.style.display = 'block';
	} else {
		dropdownMenu.style.display = 'none';
	}
}

const toggleDropdownLinks = event => {
  let parent = event.target.parentNode;

  if (event.target.className === 'section-title') {
    let dropdownLinks = event.target.nextElementSibling;

    if (dropdownLinks.style.display === 'block') {
      dropdownLinks.style.display = 'none';
    } else {
      dropdownLinks.style.display = 'block';
    }
  } else if (parent.className === 'section-title') {
    let dropdownLinks = event.target.parentNode.nextElementSibling;

    if (dropdownLinks.style.display === 'block') {
      dropdownLinks.style.display = 'none';
    } else {
      dropdownLinks.style.display = 'block';
    }
  }
}

if (burger) {
	window.addEventListener('resize', toggleDropdownTabindex);
	window.addEventListener('keydown', toggleBurgerOnKeyDown);
	burger.addEventListener('click', toggleBurger);
	dropdownSections.forEach(section => section.addEventListener('click', toggleDropdownLinks));
}

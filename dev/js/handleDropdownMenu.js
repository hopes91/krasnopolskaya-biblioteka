let dropdown = document.querySelectorAll('.dropdown');
let burger = document.getElementById('burger');
let burgerSpans = document.querySelectorAll('#burger span');
let dropdownMenu = document.getElementById('drop-menu');

const toggleDropdown = event => {
	let parentId = event.target.parentNode.id;

	if (event.target === burger || parentId === 'burger') {
		showDropdown();
	} else if (event.target === dropdownMenu) {
		hideDropdown();
	}
}

const showDropdown = () => {
	burgerSpans[0].classList.add('span-one-active');
	burgerSpans[2].classList.add('span-three-active');
	setTimeout(function() {
		burgerSpans[1].classList.add('span-two-active');
	}, 200);

	dropdownMenu.style.display = 'block';
}

const hideDropdown = () => {
	burgerSpans[0].classList.remove('span-one-active');
	burgerSpans[2].classList.remove('span-three-active');
	setTimeout(function() {
		burgerSpans[1].classList.remove('span-two-active');
	}, 200);

	dropdownMenu.style.display = 'none';
}

dropdown.forEach(element => element.addEventListener('click', toggleDropdown));

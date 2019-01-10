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
	burgerSpans[0].className = 'span-one-active';
	burgerSpans[2].className = 'span-three-active';
	setTimeout(() => {
		burgerSpans[1].className = 'span-two-active';
	}, 200);

	dropdownMenu.style.display = 'block';
}

const hideDropdown = () => {
	burgerSpans[0].className = '';
	burgerSpans[2].className = '';
	setTimeout(() => {
		burgerSpans[1].className = '';
	}, 200);

	dropdownMenu.style.display = 'none';
}

dropdown.forEach(element => element.addEventListener('click', toggleDropdown));

const navbarSections = document.querySelectorAll('.section-title');

const showNavbarLinks = event => {
  let projectTitle = event.target.nextElementSibling;
	projectTitle.style.display = 'block';
}

const hideNavbarLinks = event => {
  let projectTitle = event.target.nextElementSibling;
	projectTitle.style.display = 'none';
}

navbarSections.forEach(section => section.addEventListener('mouseenter', showNavbarLinks));
navbarSections.forEach(section => section.addEventListener('mouseleave', hideNavbarLinks));

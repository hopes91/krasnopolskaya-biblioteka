const navbarSections = document.querySelectorAll('.navbar-section');

const showNavbarLinks = event => {
  let projectTitle = event.target.children[1];
	projectTitle.style.display = 'block';
}

const hideNavbarLinks = event => {
  let projectTitle = event.target.children[1];
	projectTitle.style.display = 'none';
}

navbarSections.forEach(section => section.addEventListener('mouseenter', showNavbarLinks));
navbarSections.forEach(section => section.addEventListener('mouseleave', hideNavbarLinks));

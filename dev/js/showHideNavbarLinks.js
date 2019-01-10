let navbarSections = document.querySelectorAll('.navbar-section');

const showNavbarLinks = event => {
  let projectLinks = event.target.children[1];

  if (projectLinks) {
    projectLinks.style.display = 'block';
  }
}

const hideNavbarLinks = event => {
  let projectLinks = event.target.children[1];
  
  if (projectLinks) {
    projectLinks.style.display = 'none';
  }
}

navbarSections.forEach(section => section.addEventListener('mouseenter', showNavbarLinks));
navbarSections.forEach(section => section.addEventListener('mouseleave', hideNavbarLinks));

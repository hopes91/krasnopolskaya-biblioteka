const navbarSections = document.querySelectorAll('.navbar-section');

const toggleNavbarTabindex = () => {
  if (window.innerWidth > 800) {
    navbarSections.forEach(section => {
      if (section.hasAttribute('tabindex')) {
        section.setAttribute('tabindex', '0');
      } else {
        section.children[0].setAttribute('tabindex', '0');
      }
    });
  } else if (window.innerWidth <= 800) {
    navbarSections.forEach(section => {
      if (section.hasAttribute('tabindex')) {
        section.setAttribute('tabindex', '-1');
      } else {
        section.children[0].setAttribute('tabindex', '-1');
      }
    });
  }
}

const showHideNavbarLinksOnKeyDown = event => {
  if (event.key === 'Enter') {
    let navbarLinks = event.target.children[1];

    if (!navbarLinks.style.display || navbarLinks.style.display === 'none') {
      showNavbarLinks(event);
    } else {
      hideNavbarLinks(event);
    }
  }
}

const showNavbarLinks = event => {
  let navbarLinks = event.target.children[1];

  if (navbarLinks) {
    navbarLinks.style.display = 'block';
  }
}

const hideNavbarLinks = event => {
  let navbarLinks = event.target.children[1];

  if (navbarLinks) {
    navbarLinks.style.display = 'none';
  }
}

window.addEventListener('resize', toggleNavbarTabindex);
window.addEventListener('keydown', showHideNavbarLinksOnKeyDown);
navbarSections.forEach(section => section.addEventListener('mouseenter', showNavbarLinks));
navbarSections.forEach(section => section.addEventListener('mouseleave', hideNavbarLinks));

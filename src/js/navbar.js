const navbarSections = document.querySelectorAll('.navbar-section');

const toggleNavSectionTabIndex = () => {
  window.innerWidth > 800 ?
    navbarSections.forEach(section => section.children[0].setAttribute('tabindex', '0')) :
    navbarSections.forEach(section => section.children[0].setAttribute('tabindex', '-1'));
};

const toggleNavSectionLinksTabIndex = isOpen => {
  const sectionLinks = document.querySelectorAll('.navbar .section-links a');

  isOpen ?
    sectionLinks.forEach(link => link.setAttribute('tabindex', '0')) :
    sectionLinks.forEach(link => link.setAttribute('tabindex', '-1'));
};

const toggleNavbarLinksOnKeyDown = event => {
  const sectionLinks = event.target.nextElementSibling;

  if (event.key === 'Enter') {
    sectionLinks.className.match('closed') ?
      showNavSectionLinks(event) :
      hideNavSectionLinks(event);
  }
};

const showNavSectionLinks = event => {
  const sectionLinks = event.currentTarget.children[1];

  if (sectionLinks && sectionLinks.className.match('closed')) {
    sectionLinks.className = 'section-links opened';

    toggleNavSectionLinksTabIndex(true);
  }
};

const hideNavSectionLinks = event => {
  const sectionLinks = event.currentTarget.children[1] || event.target.nextElementSibling;

  if (sectionLinks && sectionLinks.className.match('opened')) {
    sectionLinks.className = 'section-links closed';

    toggleNavSectionLinksTabIndex(false);
  }
};

window.addEventListener('load', toggleNavSectionTabIndex);
window.addEventListener('resize', toggleNavSectionTabIndex);
navbarSections.forEach(section => section.addEventListener('keydown', toggleNavbarLinksOnKeyDown));
navbarSections.forEach(section => section.addEventListener('mouseenter', showNavSectionLinks));
navbarSections.forEach(section => section.addEventListener('mouseleave', hideNavSectionLinks));

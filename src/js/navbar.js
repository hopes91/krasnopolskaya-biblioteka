const navbarSections = document.querySelectorAll('.navbar-section');

const toggleSectionTabIndex = () => {
  window.innerWidth > 800 ?
    navbarSections.forEach(section => section.children[0].setAttribute('tabindex', '0')) :
    navbarSections.forEach(section => section.children[0].setAttribute('tabindex', '-1'));
};

const toggleLinksTabIndex = isOpen => {
  const sectionLinks = document.querySelectorAll('.navbar .section-links a');

  isOpen ?
    sectionLinks.forEach(link => link.setAttribute('tabIndex', '0')) :
    sectionLinks.forEach(link => link.setAttribute('tabIndex', '-1'));
};

const toggleNavbarLinksOnKeyDown = event => {
  const sectionLinks = event.target.nextElementSibling;

  if (event.key === 'Enter') {
    sectionLinks.className.match('closed') ?
      showSectionLinks(event) :
      hideSectionLinks(event);
  }
};

const showSectionLinks = event => {
  const sectionLinks = event.currentTarget.children[1];

  if (sectionLinks && sectionLinks.className.match('closed')) {
    sectionLinks.className = 'section-links opened';

    toggleLinksTabIndex(true);
  }
};

const hideSectionLinks = event => {
  const sectionLinks = event.currentTarget.children[1] || event.target.nextElementSibling;

  if (sectionLinks && sectionLinks.className.match('opened')) {
    sectionLinks.className = 'section-links closed';

    toggleLinksTabIndex(false);
  }
};

window.addEventListener('load', toggleSectionTabIndex);
window.addEventListener('resize', toggleSectionTabIndex);
navbarSections.forEach(section => section.addEventListener('keydown', toggleNavbarLinksOnKeyDown));
navbarSections.forEach(section => section.addEventListener('mouseenter', showSectionLinks));
navbarSections.forEach(section => section.addEventListener('mouseleave', hideSectionLinks));

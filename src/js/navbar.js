const navbarSections = document.querySelectorAll('.navbar-section');

const showSectionLinks = event => {
  const sectionLinks = event.target.children[1];

  sectionLinks &&
    sectionLinks.style.display = 'block';
};

const hideSectionLinks = event => {
  const sectionLinks = event.target.children[1];

  sectionLinks &&
    sectionLinks.style.display = 'none';
};

navbarSections.forEach(section => section.addEventListener('mouseenter', showSectionLinks));
navbarSections.forEach(section => section.addEventListener('mouseleave', hideSectionLinks));

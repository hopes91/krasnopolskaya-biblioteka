const showSectionLinks = event => {
  const sectionLinks = event.target.children[1];

  if (sectionLinks) {
    sectionLinks.style.display = 'block';
  }
};

const hideSectionLinks = event => {
  const sectionLinks = event.target.children[1];

  if (sectionLinks) {
    sectionLinks.style.display = 'none';
  }
};

document.querySelectorAll('.navbar-section').forEach(section => section.addEventListener('mouseenter', showSectionLinks));
document.querySelectorAll('.navbar-section').forEach(section => section.addEventListener('mouseleave', hideSectionLinks));

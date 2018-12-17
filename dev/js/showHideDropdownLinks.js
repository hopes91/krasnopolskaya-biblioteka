const dropdownSections = document.querySelectorAll('.dropdown-section');

const toggleDropdownLinks = event => {
  if (event.target.className === 'section-title') {
    let dropdownLinks = event.target.nextElementSibling;
    if (dropdownLinks.style.display === 'block') {
      dropdownLinks.style.display = 'none';
    } else {
      dropdownLinks.style.display = 'block';
    }
  }
}

dropdownSections.forEach(section => section.addEventListener('click', toggleDropdownLinks));

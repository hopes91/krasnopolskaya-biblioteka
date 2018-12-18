const dropdownSections = document.querySelectorAll('.dropdown-section');

const toggleDropdownLinks = event => {
  let parent = event.target.parentNode;
  
  if (event.target.className === 'section-title') {
    let dropdownLinks = event.target.nextElementSibling;

    if (dropdownLinks.style.display === 'block') {
      dropdownLinks.style.display = 'none';
    } else {
      dropdownLinks.style.display = 'block';
    }
  } else if (parent.className === 'section-title') {
    let dropdownLinks = event.target.parentNode.nextElementSibling;

    if (dropdownLinks.style.display === 'block') {
      dropdownLinks.style.display = 'none';
    } else {
      dropdownLinks.style.display = 'block';
    }
  }
}

dropdownSections.forEach(section => section.addEventListener('click', toggleDropdownLinks));

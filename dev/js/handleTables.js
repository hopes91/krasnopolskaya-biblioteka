let main = document.querySelector('main');
let ornaments = document.querySelectorAll('.ornament');

const handleTables = () => {
  if (window.innerWidth > 640) {
    main.style.padding = '1em';
    ornaments.forEach(ornament => ornament.style.display = 'inline-block');
  } else if (
    !main.children[0].className.includes('poster') &&
    !main.children[0].className.includes('past-events') &&
    !main.children[0].className.includes('price-list') &&
    window.innerWidth <= 640)
  {
    main.style.padding = '0.5em';
  } else if ((
    main.children[0].className.includes('poster') ||
    main.children[0].className.includes('past-events') ||
    main.children[0].className.includes('price-list')) &&
    window.innerWidth <= 640) {
    main.style.padding = '0.5em 0';
    ornaments.forEach(ornament => ornament.style.display = 'none');
  }
}

window.addEventListener('resize', handleTables);

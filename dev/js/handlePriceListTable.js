const main = document.querySelector('main');

const handlePriceListTable = () => {
  if (main.children[0].className.includes('price-list') && window.innerWidth <= 640) {
    main.style.padding = '1em 0';
  } else {
    main.style.padding = '1em 0.5em';
  }
}

window.addEventListener('resize', handlePriceListTable);

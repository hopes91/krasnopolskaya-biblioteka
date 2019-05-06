// для IE
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


const getCurrentYear = () => {
  const copyrightYear = document.getElementById('current-year');

  let today = new Date();
  let year = today.getFullYear();

  copyrightYear.textContent = year;
}

window.addEventListener('load', getCurrentYear);

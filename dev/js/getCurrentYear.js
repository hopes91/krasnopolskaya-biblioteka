// для IE
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

let copyrightYear = document.getElementById('current-year');

const getCurrentYear = () => {
  let today = new Date();
  let year = today.getFullYear();

  copyrightYear.textContent = year;
}

window.addEventListener('load', getCurrentYear);

const copyrightYear = document.getElementById('current-year');

const getCurrentYear = () => {
  let today = new Date();
  let year = today.getFullYear();

  copyrightYear.textContent = year;
}

window.addEventListener('load', getCurrentYear);

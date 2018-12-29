const copyrightYear = document.getElementById('year');

const getTheYear = () => {
  let today = new Date();
  let year = today.getFullYear();

  copyrightYear.textContent = year;
}

window.addEventListener('load', getTheYear);

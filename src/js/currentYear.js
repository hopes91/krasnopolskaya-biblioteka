const getCurrentYear = () => {
  document.getElementById('current-year').textContent = new Date().getFullYear();
};

window.addEventListener('load', getCurrentYear);

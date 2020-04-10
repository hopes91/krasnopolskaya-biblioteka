const getCurrentYear = () => {
  const currentYear = document.getElementById('current-year');
  
  currentYear.textContent = new Date().getFullYear();
};

window.addEventListener('load', getCurrentYear);

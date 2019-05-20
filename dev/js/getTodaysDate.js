const getTodaysDate = () => {
  const todaysDate = document.querySelector('.todays-date');
  const spanDayOfTheWeek = document.getElementById('span-dayOfTheWeek');
  const spanDay = document.getElementById('span-day');
  const spanMonth = document.getElementById('span-month');
  const spanYear = document.getElementById('span-year');

  let today = new Date();
  let dayOfTheWeekNum = today.getDay();
  let dayOfTheWeekStr = null;
  let day = today.getDate();
  let monthNum = today.getMonth();
  let monthStr = null;
  let year = today.getFullYear();

  const daysOfTheWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  daysOfTheWeek.forEach((day, ind) => {
    if (ind == dayOfTheWeekNum) {
      dayOfTheWeekStr = day;
    }
  });

  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  months.forEach((month, ind) => {
    if (ind == monthNum) {
      monthStr = month;
    }
  });

  spanDayOfTheWeek.innerHTML = dayOfTheWeekStr;
  spanDay.innerHTML = day;
  spanMonth.innerHTML = monthStr;
  spanYear.innerHTML = year;
}

window.addEventListener('load', getTodaysDate);

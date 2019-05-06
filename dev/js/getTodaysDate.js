const getTodaysDate = () => {
  const todaysDate = document.querySelector('.todays-date');
  const spanDayOfTheWeek = document.getElementById('span-dayOfTheWeek');
  const spanDay = document.getElementById('span-day');
  const spanMonth = document.getElementById('span-month');
  const spanYear = document.getElementById('span-year');

  if (todaysDate) {
    let today = new Date();
    let dayOfTheWeekNum = today.getDay();
    let dayOfTheWeekStr = null;
    let day = today.getDate();
    let monthNum = today.getMonth();
    let monthStr = null;
    let year = today.getFullYear();

    let daysOfTheWeek = {
      0: 'Воскресенье',
      1: 'Понедельник',
      2: 'Вторник',
      3: 'Среда',
      4: 'Четверг',
      5: 'Пятница',
      6: 'Суббота'
    };

    for (let dayOfTheWeek in daysOfTheWeek) {
      if (dayOfTheWeekNum == dayOfTheWeek) {
        dayOfTheWeekStr = daysOfTheWeek[dayOfTheWeek];
      }
    }

    let months = {
      0: 'января',
      1: 'февраля',
      2: 'марта',
      3: 'апреля',
      4: 'мая',
      5: 'июня',
      6: 'июля',
      7: 'августа',
      8: 'сентября',
      9: 'октября',
      10: 'ноября',
      11: 'декабря'
    };

    for (let month in months) {
      if (monthNum == month) {
        monthStr = months[month];
      }
    }

    spanDayOfTheWeek.textContent = dayOfTheWeekStr;
    spanDay.textContent = day;
    spanMonth.textContent = monthStr;
    spanYear.textContent = year;
  }
}

window.addEventListener('load', getTodaysDate);

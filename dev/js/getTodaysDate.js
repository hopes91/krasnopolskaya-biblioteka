const todaysDate = document.querySelector('.todaysDate');
const spanDayOfTheWeek = document.getElementById('span-dayOfTheWeek');
const spanDay = document.getElementById('span-day');
const spanMonth = document.getElementById('span-month');
const spanYear = document.getElementById('span-year');

const getTodaysDate = () => {
  if (todaysDate) {
    let today = new Date();
    let dayOfTheWeekNum = today.getDay();
    let dayOfTheWeekStr = null;
    let day = today.getDate();
    let monthNum = today.getMonth();
    let monthStr = null;
    let year = today.getFullYear();

    let daysOfTheWeek = {
      1: 'Понедельник',
      2: 'Вторник',
      3: 'Среда',
      4: 'Четверг',
      5: 'Пятница',
      6: 'Суббота',
      7: 'Воскресенье'
    };

    for (let dayOfTheWeek in daysOfTheWeek) {
      if (dayOfTheWeekNum == dayOfTheWeek) {
        dayOfTheWeekStr = daysOfTheWeek[dayOfTheWeek];
      }
    }

    let months = {
      1: 'января',
      2: 'февраля',
      3: 'марта',
      4: 'апреля',
      5: 'мая',
      6: 'июня',
      7: 'июля',
      8: 'августа',
      9: 'сентября',
      10: 'октября',
      11: 'ноября',
      12: 'декабря'
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

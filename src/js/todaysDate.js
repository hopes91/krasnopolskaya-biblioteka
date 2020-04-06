const getTodaysDate = () => {
    const today = new Date();
    const dayOfTheWeekNum = today.getDay();
    let dayOfTheWeekStr = null;
    const day = today.getDate();
    const monthNum = today.getMonth();
    let monthStr = null;
    const year = today.getFullYear();

    const daysOfTheWeek = {
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

    const months = {
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

    document.querySelector('.date-dayOfTheWeek').textContent = dayOfTheWeekStr;
    document.querySelector('.date-day').textContent = day;
    document.querySelector('.date-month').textContent = monthStr;
    document.querySelector('.date-year').textContent = year;
};

window.addEventListener('load', getTodaysDate);

const todaysDate = document.getElementById('todaysDate');

const getTodaysDate = () => {
  if (todaysDate) {
    let today = new Date();
    let dayOfTheWeekNum = today.getDay();
    let dayOfTheWeekStr = null;
    let day = today.getDate();
    let month = today.getMonth();
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

    todaysDate.textContent = `${dayOfTheWeekStr}, ${day}.${month}.${year}`;
  }
}

window.addEventListener('load', getTodaysDate);

// const newsByMonthsTitles = document.querySelectorAll('.news-by-months-title');
//
// const toggleNews = event => {
//   const newsByMonthsSection = event.target.nextElementSibling;
//
//   newsByMonthsSection.className.match('closed') ?
//     newsByMonthsSection.className = 'news-by-months-wrapper opened' :
//     newsByMonthsSection.className = 'news-by-months-wrapper closed';
//
//   changeTitleAttribute(event, newsByMonthsSection);
// };
//
// const changeTitleAttribute = (event, newsByMonthsSection) => {
//   newsByMonthsSection.className.match('closed') ?
//     event.target.setAttribute('title', 'Нажать, чтобы открыть') :
//     event.target.setAttribute('title', 'Нажать, чтобы закрыть');
// };
//
// if (newsByMonthsTitles) {
//   newsByMonthsTitles.forEach(title => title.addEventListener('click', toggleNews));
// }

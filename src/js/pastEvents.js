const tableTitle = document.querySelectorAll('.table-title');

const toggleEvents = event => {
  const pastEventsTable = event.target.nextElementSibling;

  pastEventsTable.className.match('closed') ?
    pastEventsTable.className = 'opened' :
    pastEventsTable.className = 'closed';

  changeTitleAttribute(event, pastEventsTable);
};

const changeTitleAttribute = (event, pastEventsTable) => {
  pastEventsTable.className.match('closed') ?
    event.target.setAttribute('title', 'Нажать, чтобы открыть') :
    event.target.setAttribute('title', 'Нажать, чтобы закрыть');
};

if (tableTitle) {
  tableTitle.forEach(title => title.addEventListener('click', toggleEvents));
}

const questions = document.querySelectorAll('.news ol li');

if (questions) {
  questions.forEach(question => {
    let answer = document.createElement('span');
    answer.className = 'show-answer';
    answer.innerHTML = 'Показать ответ';
    question.appendChild(answer);
  });
}

const showTheAnswer = event => {
  if (event.target.className === 'show-answer') {
    event.target.style.display = 'none';
    event.target.previousElementSibling.style.display = 'inline';
  }
}

if (questions) {
  questions.forEach(question => question.addEventListener('click', showTheAnswer));
}

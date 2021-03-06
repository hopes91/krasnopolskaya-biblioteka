	const arrowUp = document.getElementById('arrow-up');

// const showHideArrowUp = () => {
// 	if (window.pageYOffset > window.innerHeight / 3) {
// 		arrowUp.style.display = 'inline-block';
//     arrowUp.setAttribute('tabindex', '0');
// 	}
//
// 	if (window.pageYOffset === 0) {
// 		arrowUp.style.display = 'none';
//     arrowUp.setAttribute('tabindex', '-1');
// 	}
// };

function scrollToTop(event) {
  event.preventDefault();

  const speed = 0.3;
  const offsetY = window.pageYOffset;
  let hash = null;
  let start = null;

  event.currentTarget.id.match('arrow-up') ?
    hash = event.currentTarget.href.replace(/[^#]*(.*)/, '$1') :
    hash = arrowUp.href.replace(/[^#]*(.*)/, '$1');

  const topIndent = document.querySelector(hash).getBoundingClientRect().top;

  requestAnimationFrame(step);

  function step(time) {
    if (start === null) {
      start = time;
    }

    const progress = time - start;
    let scroll = null;

    topIndent < 0 ?
      scroll = Math.max(offsetY - progress/speed, offsetY + topIndent) :
      scroll = Math.min(offsetY + progress/speed, offsetY + topIndent);

    window.scrollTo(0, scroll);

    scroll !== offsetY + topIndent ?
      requestAnimationFrame(step) :
      window.location.hash = hash;
  }
}

// window.addEventListener('scroll', showHideArrowUp);
arrowUp.addEventListener('click', scrollToTop);

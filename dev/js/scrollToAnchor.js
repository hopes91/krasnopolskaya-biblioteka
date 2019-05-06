const anchorElements = document.querySelectorAll('[href^="#"]');

function scrollToAnchor(event) {
  event.preventDefault();

  let speed = 1;
  let offsetY = window.pageYOffset;
  let hash = this.href.replace(/[^#]*(.*)/, '$1');
  let indent = document.querySelector(hash).getBoundingClientRect().top;
  let start = null;

  requestAnimationFrame(step);

  function step(time) {
    if (start === null) {
      start = time;
    }

    let progress = time - start;
    let scroll = null;

    if (indent < 0) {
      scroll = Math.max(offsetY - progress/speed, offsetY + indent);
    } else {
      scroll = Math.min(offsetY + progress/speed, offsetY + indent);
    }

    window.scrollTo(0, scroll);

    if (scroll !== offsetY + indent) {
      requestAnimationFrame(step);
    } else {
      location.hash = hash;
    }
  }
}

anchorElements.forEach(anchorElement => anchorElement.addEventListener('click', scrollToAnchor));

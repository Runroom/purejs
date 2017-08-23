import ScrollTo from './ScrollTo';

const pageHeight = document.body.clientHeight;
const scrollOffset = 0.25;
const maxScrollTop = pageHeight * scrollOffset;

let scrollIsVisible = false;

function createScrollTop() {
  const styles = {
    background: 'rgba(0, 0, 0, .5)',
    border: '0',
    bottom: '24px',
    borderRadius: '50%',
    display: 'block',
    height: '48px',
    position: 'fixed',
    right: '24px',
    textAlign: 'center',
    textDecoration: 'none',
    width: '48px'
  };

  const content =
    '<svg style="height: 32px; padding: 8px 0; width: 32px;"><path fill="#fff" d="M21.707 13.293l-5-5a.999.999 0 0 0-1.414 0l-5 5a.999.999 0 1 0 1.414 1.414L15 11.414V23a1 1 0 1 0 2 0V11.414l3.293 3.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414z"/></svg>';

  const element = document.createElement('a');

  element.className = 'js-scrollTop';
  Object.assign(element.style, styles);
  element.innerHTML = content;

  element.addEventListener('click', event => {
    event.preventDefault();
    ScrollTo(0);
  });

  document.body.appendChild(element);
}

function handleScrollTopVisibility() {
  if (window.scrollY >= maxScrollTop && !scrollIsVisible) {
    createScrollTop();
    scrollIsVisible = true;
  } else if (scrollIsVisible) {
    document.querySelector('.js-scrollTop').remove();
    scrollIsVisible = false;
  }
}

export default function GoTop() {
  handleScrollTopVisibility();
  window.addEventListener('scroll', handleScrollTopVisibility);
}

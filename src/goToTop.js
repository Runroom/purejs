import debounce from './debounce';
import scrollTo from './scrollTo';

const pageHeight = document.body.clientHeight;
let maxScrollTop = pageHeight * 0.25;

let scrollIsVisible = false;

let opts = {
  elementClass: 'js-scrollTop',
  hiddenClass: null,
  createElement: true,
  scrollOffset: 0.25
};

function handleExtend(settings) {
  opts = Object.assign({}, opts, settings);
  maxScrollTop = pageHeight * opts.scrollOffset;
}

function handleScrollTopVisibility() {
  if (window.scrollY >= maxScrollTop && !scrollIsVisible) {
    if (opts.hiddenClass) {
      document.querySelector(`.${opts.elementClass}`).classList.remove(opts.hiddenClass);
    } else {
      document.querySelector(`.${opts.elementClass}`).style.display = 'block';
    }
    scrollIsVisible = true;
  } else if (scrollIsVisible) {
    if (opts.hiddenClass) {
      document.querySelector(`.${opts.elementClass}`).classList.add(opts.hiddenClass);
    } else {
      document.querySelector(`.${opts.elementClass}`).style.display = 'none';
    }
    scrollIsVisible = false;
  }
}

export function createScrollTop() {
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

  element.className = opts.elementClass;
  Object.assign(element.style, styles);
  element.innerHTML = content;

  element.addEventListener('click', event => {
    event.preventDefault();
    scrollTo(0);
  });

  document.body.appendChild(element);
}

export default function goToTop(settings) {
  if (settings) {
    handleExtend(settings);
  }

  if (opts.createElement) createScrollTop();
  handleScrollTopVisibility();
  window.addEventListener('scroll', () => {
    debounce(handleScrollTopVisibility);
  });
}

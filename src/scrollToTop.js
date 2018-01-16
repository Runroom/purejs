// import debounce from './debounce';
import safeScrollTop from './safeScrollTop';
import scrollTo from './scrollTo';

const pageHeight = document.body.clientHeight;
let maxScrollTop = pageHeight * 0.25;
let scrollIsVisible = false;

let opts = {
  element: 'js-scrollTop',
  hiddenClass: null,
  createButton: true,
  scrollOffset: 0.25
};

function handleExtend(settings) {
  opts = Object.assign({}, opts, settings);
  maxScrollTop = document.body.clientHeight * opts.scrollOffset;
}

function handleScrollTopVisibility() {
  const element = document.querySelector(`.${opts.element}`);
  if (!element) {
    throw new Error(`Element .${opts.element} not found`);
  }

  if (safeScrollTop() >= maxScrollTop && !scrollIsVisible) {
    if (opts.hiddenClass) {
      element.classList.remove(opts.hiddenClass);
    } else {
      element.style.display = 'block';
    }
    scrollIsVisible = true;
  } else if (safeScrollTop() < maxScrollTop && scrollIsVisible) {
    if (opts.hiddenClass) {
      element.classList.add(opts.hiddenClass);
    } else {
      element.style.display = 'none';
    }
    scrollIsVisible = false;
  }
}

export function createScrollTopButton() {
  const styles = {
    background: 'rgba(0, 0, 0, .5)',
    border: '0',
    bottom: '24px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'none',
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

  element.className = opts.element;
  Object.assign(element.style, styles);
  element.innerHTML = content;

  element.addEventListener('click', event => {
    event.preventDefault();
    scrollTo(0);
  });

  document.body.appendChild(element);
}

export default function scrollToTop(settings) {
  if (settings) {
    handleExtend(settings);
  }

  if (opts.createButton) createScrollTopButton();
  handleScrollTopVisibility();
  window.addEventListener('scroll', handleScrollTopVisibility);
}

import ForEach from './ForEach';

let opts = {
  trigger: '.js-anchor',
  scrollUpClass: 'scroll-up',
  scrollDownClass: 'scroll-down',
  offset: 0
};

function scrollToAnchor() {
  const element = document.querySelector(location.hash);
  window.scrollTo(0, element.offsetTop - opts.offset);
}

function handleExtend(settings) {
  opts = Object.assign({}, opts, settings);
}

export function handleScrollToAnchor(hash) {
  location.hash = hash;
  scrollToAnchor();
}

export default function Anchor(settings) {
  if (settings) {
    handleExtend(settings);
  }

  if (location.hash !== '') {
    scrollToAnchor();

    setTimeout(() => {
      document.documentElement.classList.remove(opts.scrollUpClass);
      document.documentElement.classList.add(opts.scrollDownClass);
    }, 1);
  }

  const triggers = document.querySelectorAll(opts.trigger);
  ForEach(triggers, index => {
    triggers[index].addEventListener('click', event => {
      event.preventDefault();
      location.hash = triggers[index].getAttribute('href');
      scrollToAnchor();
    });
  });
}

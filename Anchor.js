import ForEach from './ForEach';
import { getConfig as scrollDirectionConfig } from './ScrollDirection';

let opts = {
  trigger: '.js-anchor',
  scrollDirection: false,
  offset: 0
};

function scrollToAnchor() {
  const element = document.querySelector(location.hash);
  window.scrollTo(0, element.offsetTop - opts.offset);
}

function handleScrollDirectionChange() {
  const scrollOpts = scrollDirectionConfig();

  setTimeout(() => {
    document.documentElement.classList.remove(scrollOpts.classUp);
    document.documentElement.classList.add(scrollOpts.classDown);
  }, 1);
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

    if (opts.scrollDirection) {
      handleScrollDirectionChange();
    }
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

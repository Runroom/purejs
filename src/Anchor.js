// For a best approach to fix the header height
// https://css-tricks.com/hash-tag-links-padding/
import forEach from './forEach';

let opts = {
  trigger: 'js-anchor',
  attribute: 'data-anchor',
  offsetTop: 0
};

function handleExtend(settings) {
  opts = Object.assign({}, opts, settings);
}

export function scrollToAnchor(hash) {
  if (hash) document.location.hash = hash;
  const element = document.querySelector(document.location.hash);
  window.scrollTo(0, element.offsetTop - opts.offsetTop);
}

export default function anchor(settings) {
  if (settings) handleExtend(settings);
  if (document.location.hash) scrollToAnchor();

  const triggers = document.querySelectorAll(`.${opts.trigger}`);
  forEach(triggers, index => {
    triggers[index].addEventListener('click', event => {
      event.preventDefault();
      const anchorHash = triggers[index].getAttribute(opts.attribute);
      scrollToAnchor(anchorHash);
    });
  });
}

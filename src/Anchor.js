// For a best approach to fix the header height
// https://css-tricks.com/hash-tag-links-padding/
import ForEach from './ForEach';

let opts = {
  trigger: 'js-anchor',
  attribute: 'data-anchor',
  offsetTop: 0
};

function handleExtend(settings) {
  opts = Object.assign({}, opts, settings);
}

export function scrollToAnchor(hash) {
  if (hash) location.hash = hash;
  const element = document.querySelector(location.hash);
  window.scrollTo(0, element.offsetTop - opts.offsetTop);
}

export default function Anchor(settings) {
  if (settings) handleExtend(settings);
  if (location.hash) scrollToAnchor();

  const triggers = document.querySelectorAll(`.${opts.trigger}`);
  ForEach(triggers, index => {
    triggers[index].addEventListener('click', event => {
      event.preventDefault();
      const anchorHash = triggers[index].getAttribute(opts.attribute);
      scrollToAnchor(anchorHash);
    });
  });
}

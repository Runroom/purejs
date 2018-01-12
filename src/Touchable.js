export default function touchable(container) {
  const touchsupport =
    'ontouchstart' in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
  const touchClass = touchsupport ? 'touch' : 'non-touch';
  let el = container;
  if (!container) el = document.documentElement;
  el.classList.add(touchClass);
}

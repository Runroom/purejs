export default function Touchable(container) {
  const touchsupport =
    'ontouchstart' in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
  const touchClass = touchsupport ? 'touch' : 'non-touch';
  const el = container ? container : document.documentElement;
  el.classList.add(touchClass);
}

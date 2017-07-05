export default function Touchable() {
  const touchsupport =
    'ontouchstart' in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
  const touchClass = touchsupport ? 'touch' : 'non-touch';
  document.documentElement.classList.add(touchClass);
}

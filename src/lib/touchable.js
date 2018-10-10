function touchable(container = document.documentElement) {
  const touchsupport =
    'ontouchstart' in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
  const touchClass = touchsupport ? 'touch' : 'non-touch';
  container.classList.add(touchClass);
}

export default touchable;

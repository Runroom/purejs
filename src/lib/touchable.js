function touchable() {
  const touchsupport =
    'ontouchstart' in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
  return !!touchsupport;
}

export default touchable;
